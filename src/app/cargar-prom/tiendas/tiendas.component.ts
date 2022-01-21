import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs"
import { BackendService } from 'src/app/services/backend.service';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { Tienda} from "src/app/interface/modelos.interface"


@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css'],
  animations: [
    trigger("mostrar", [
      state("false", style({
        opacity: 0,
        display: 'none'
      })),
      state("true", style({
        opacity: 1, 
      })),
      transition("false => true", [
        style({ 'display': 'flex' }),
        animate("500ms ease-in"),
      ]),
      transition("true => false", [
        animate("500ms ease-out"),
      ]),
    ])
  ]
})
export class TiendasComponent implements OnInit {

  error: boolean = false
  loading: boolean = false;
  showRow: boolean = false;
  
  tiendasActualizadas: number = 0;
  cantidadTiendas: number = 0;
  cantidadTiendas_Teknei: number = 0;
  cantidadTiendas_Temm: number = 0;
  
  textoBoton: string = "Actualizar Pdvs"
  statusBoton: boolean = false
  statusEnviar: boolean = false

  tiendas: Tienda [] = []
  tiendasBD: Tienda [] = []
  tiendaSeleccionada: any = []

  constructor(private be_service: BackendService) {
    this.be_service.obtenerTiendas().subscribe((data: Tienda[]) => {
      this.tiendasBD = data;
      this.tiendasBD.forEach((tienda)=> {
        if(tienda.SOCIO_COMERCIAL == "TEMM") this.cantidadTiendas_Temm ++
        if(tienda.SOCIO_COMERCIAL == "TEKNEI") this.cantidadTiendas_Teknei ++
      })
    })
  }

  ngOnInit(): void {
  }


  obtenerArchivo(event: any){
    this.showRow = true
    this.error = false

    const file = event.target.files[0];
    const reader = new FileReader();
    this.loading = true
    let i=0;

    reader.readAsArrayBuffer(file)
    reader.onload = () => {
      const buffer: any = reader.result;
      let woorkbook = new Exceljs.Workbook();
      
      woorkbook.xlsx.load(buffer).then((err)=>{
        var woorksheet = woorkbook.getWorksheet("DIRECTORIO TIENDAS");
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>1){
            const SOCIO_COM= row.getCell(16).value
            if(SOCIO_COM == "TEMM" || SOCIO_COM == "TEKNEI"){
              let tienda: Tienda = {
                TERRITORIO: "",
                REGION: "",
                SUBDIRECTOR_REGIONAL: "",
                SUBDIRECTOR_TERRITORIAL: "",
                LIDER_INTERNO: "",
                LIDER_SOCIO_COMERCIAL: "",
                STAFF: "",
                IDPDV: "",
                TIENDA: "",
                SOCIO_COMERCIAL: "",
                SAP: "",
                STATUS: 0,
              }
              tienda.TERRITORIO = row.getCell(1).value?.toString();
              tienda.REGION = row.getCell(3).value?.toString()
              tienda.SUBDIRECTOR_REGIONAL = row.getCell(4).value?.toString();
              tienda.SUBDIRECTOR_TERRITORIAL = row.getCell(5).value?.toString();
              tienda.LIDER_INTERNO = row.getCell(6).value?.toString();
              tienda.LIDER_SOCIO_COMERCIAL = row.getCell(7).value?.toString();
              tienda.STAFF = row.getCell(12).value?.toString()
              tienda.IDPDV = row.getCell(13).value?.toString()
              tienda.TIENDA = row.getCell(14).value?.toString()
              tienda.SOCIO_COMERCIAL = SOCIO_COM
              tienda.SAP = row.getCell(26).value?.toString()
              tienda.STATUS = 1
              this.tiendas.push(tienda)
              this.cantidadTiendas++
            }
          }
        })
      }).catch(()=> {
        this.error= true 
      }).finally(()=>{
        console.log(this.tiendas);
        this.loading = false;
      })
    }
  }

  Guardar(){
   this.statusEnviar= true;
   this.textoBoton="Actualizando..."

   this.tiendas.forEach((tienda: Tienda) => {
      let tiendaExiste= false;
      this.tiendasBD.forEach((tiendaBD: Tienda) => {
        if(tienda.IDPDV == tiendaBD.IDPDV){
          tiendaExiste = true
          tienda.ID_TIENDA = tiendaBD.ID_TIENDA
        };
      });
      if(tiendaExiste){
        //Si la tienda existe actualizamos la bd y los datos traidos de la base
        this.tiendasBD.forEach((tiendaBD)=>{
          if(tiendaBD.IDPDV == tienda.IDPDV){
            tiendaBD.TIENDA = tienda.TIENDA
          }
        })
        this.be_service.modificarTienda(tienda).subscribe(data=> {
          console.log(data);
          this.tiendasActualizadas++
          if(this.tiendasActualizadas == this.cantidadTiendas){
            this.showRow = this.loading = this.error = this.statusBoton = this.statusEnviar = false;
          }
        })
      }else{
        //Si la tienda no existe se da de alta
        this.be_service.agregarTienda(tienda).subscribe((data: any)=>{
          this.tiendasActualizadas++
          this.tiendasBD.push(tienda)
          if(this.tiendasActualizadas == this.cantidadTiendas){
            this.showRow = this.loading = this.error = this.statusBoton = this.statusEnviar = false;
          }
        })
      }
   })
  }
}
