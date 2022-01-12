import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs"

@Component({
  selector: 'app-promociones-prepago',
  templateUrl: './promociones-prepago.component.html',
  styleUrls: ['./promociones-prepago.component.css']
})
export class PromocionesPrepagoComponent implements OnInit {
  nombreDocumento: string = ""
  numeroPromociones: number = 0
  error: boolean = false;
  statusTexto: string = "Documento Leído"
  status: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  obtenerArchivo(event: any){
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
            // const nombre = row.getCell(1).value;
            // const apellido = row.getCell(2).value;
            // console.log({nombre, apellido});
            this.numeroPromociones++
          }
        })
      }).catch(()=> {
        this.error= true 
        this.nombreDocumento=""
      })

    }
    
    
  }
  badgeClass(){
    if(this.status == 0) return "bg-secondary"
    if(this.status == 1) return "bg-success"
    if(this.status == 2) return "bg-danger"
    return ""
  }
  cargarData(){
    this.status=1 
    this.statusTexto = "Carga exitosa."
  }
}
