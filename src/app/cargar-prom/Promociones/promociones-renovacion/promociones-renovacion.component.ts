import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs" 
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-promociones-renovacion',
  templateUrl: './promociones-renovacion.component.html',
  styleUrls: ['./promociones-renovacion.component.css']
})
export class PromocionesRenovacionComponent implements OnInit {
  nombreDocumento: string = ""
  numeroPromociones: number = 0
  PromocionesRenovacion: any = []

  error: boolean = false;
  loading: boolean = false;

  datacargada: boolean = false;
  txt_boton_carga: string = "Guardar"

  statusTexto: string = "Documento Leído"
  status: number = 0;


  constructor(private be_service: BackendService) { }
  

  ngOnInit(): void {
  }
  obtenerArchivo(event: any){
    this.loading = true

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsArrayBuffer(file)
    reader.onload = () => {
      const buffer: any = reader.result;
      let woorkbook = new Exceljs.Workbook();
      
      woorkbook.xlsx.load(buffer).then((err)=>{
        var woorksheet = woorkbook.getWorksheet("PROMOS ENERO");
        this.nombreDocumento = file.name
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>7){
            let promocion: any={}
            promocion.SKU= row.getCell(4).value;
            promocion.PVP= row.getCell(7).value;
            promocion.DESCUENTO = row.getCell(10).result == null ? row.getCell(10).value : row.getCell(10).result
            promocion.FECHA_INICIO = row.getCell(13).value
            promocion.FECHA_FINAL = row.getCell(14).value
            this.PromocionesRenovacion.push(promocion)
            this.numeroPromociones++
          }
        })
      }).catch(()=> {
        this.error= true 
        this.nombreDocumento=""
      }).then(() => {
        console.log(this.PromocionesRenovacion);
      })

    }
    
    
  }
  badgeClass(): string{
    if(this.status == 0) return "bg-secondary"
    if(this.status == 1) return "bg-success"
    if(this.status == 2) return "bg-danger"
    return ""
  }
  async cargarData(){
    this.txt_boton_carga="Guardando"
    
    await this.be_service.eliminarPromocionRenovacion().subscribe(()=> {});
    let i=0;
    await this.PromocionesRenovacion.forEach((promocion: any) =>{
      this.be_service.agregarPromocionRenovacion(promocion).subscribe((data) => {
        console.log(data);
        i++

        if(i == this.PromocionesRenovacion.length){
          this.status=1 
          this.statusTexto = "Carga exitosa."
          this.datacargada = true;
        }
      })
    })
  
  }
}
