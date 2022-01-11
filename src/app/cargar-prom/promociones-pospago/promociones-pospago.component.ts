import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs"

@Component({
  selector: 'app-promociones-pospago',
  templateUrl: './promociones-pospago.component.html',
  styleUrls: ['./promociones-pospago.component.css']
})
export class PromocionesPospagoComponent implements OnInit {

  nombreDocumento: string = ""

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
      }).catch(()=> console.log("valio verga"))

    }
    
    
  }

}
