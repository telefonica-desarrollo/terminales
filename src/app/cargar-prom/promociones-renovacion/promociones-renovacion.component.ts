import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs"

@Component({
  selector: 'app-promociones-renovacion',
  templateUrl: './promociones-renovacion.component.html',
  styleUrls: ['./promociones-renovacion.component.css']
})
export class PromocionesRenovacionComponent implements OnInit {
  
  nombreDocumento: string = ""
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
        var woorksheet = woorkbook.getWorksheet("Hoja1");
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>1){
            this.nombreDocumento = file.name
            const nombre = row.getCell(1).value;
            const apellido = row.getCell(2).value;
            console.log({nombre, apellido});
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
  }

}
