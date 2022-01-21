import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import * as Exceljs from "exceljs"


@Component({
  selector: 'app-terminales',
  templateUrl: './terminales.component.html',
  styleUrls: ['./terminales.component.css']
})
export class TerminalesComponent implements OnInit {

  loading: boolean = false;
  guardar: boolean = false;
  error: boolean = false;


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
        var woorksheet = woorkbook.getWorksheet("HOJA1");
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>1){
            let terminal: any={}
            terminal.SKU = row.getCell(1).value
            terminal.MARCA = row.getCell(2).value
            terminal.MODELO = row.getCell(3).value
          }
        })
      }).catch(()=> {
        this.error = true;
      }).then(()=>{
        this.guardar= true;
      })
    }
    
    
  }
  cargarData(){
    
  
  }

}
