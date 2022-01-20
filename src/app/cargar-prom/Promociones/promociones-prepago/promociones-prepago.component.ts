import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs"
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-promociones-prepago',
  templateUrl: './promociones-prepago.component.html',
  styleUrls: ['./promociones-prepago.component.css']
})
export class PromocionesPrepagoComponent implements OnInit {
  nombreDocumento: string = ""
  numeroPromociones: number = 0
  PromocionesPrepago: any = []

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
        var woorksheet = woorkbook.getWorksheet("PROMOCIONES");
        this.nombreDocumento = file.name
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>7){
            let promocion: any={}
            promocion.SKU= row.getCell(5).value;
            promocion.PVP= row.getCell(8).value;
            promocion.DESCUENTO = row.getCell(12).value
            promocion.FECHA_INICIO = row.getCell(13).value
            promocion.FECHA_FINAL = row.getCell(14).value
            this.PromocionesPrepago.push(promocion)
            this.numeroPromociones++
          }
        })
      }).catch(()=> {
        this.error= true 
        this.nombreDocumento=""
      }).then(() => {
        console.log(this.PromocionesPrepago);
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
    
    await this.be_service.eliminarPromocionPrepago().subscribe(()=> {});
    let i=0;
    await this.PromocionesPrepago.forEach((promocion: any) =>{
      this.be_service.agregarPromocionPrepago(promocion).subscribe((data) => {
        console.log(data);
        i++

        if(i == this.PromocionesPrepago.length){
          this.status=1 
          this.statusTexto = "Carga exitosa."
          this.datacargada = true;
        }
      })
    })
  
  }
}
