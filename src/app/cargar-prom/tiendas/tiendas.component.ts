import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs"


@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  nombreDocumento: string = ""
  error: boolean = false
  status: boolean = false
  loading: boolean = false;
  numeroLineas: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  obtenerArchivo(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    this.loading = true


    reader.readAsArrayBuffer(file)
    reader.onload = () => {
      const buffer: any = reader.result;
      let woorkbook = new Exceljs.Workbook();
      
      woorkbook.xlsx.load(buffer).then((err)=>{
        var woorksheet = woorkbook.getWorksheet("Sheet1");
        this.nombreDocumento = file.name
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>1){
            // const nombre = row.getCell(1).value;
            // const apellido = row.getCell(2).value;
            // console.log({nombre, apellido});
            this.numeroLineas++;
          }
        })
      }).catch(()=> {
        this.error= true 
        this.nombreDocumento=""
        this.status = false;
      })
    }
  }

  statusInfo(){
    this.status= true;
  }
}
