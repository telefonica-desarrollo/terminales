import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs"

@Component({
  selector: 'app-doc-altas',
  templateUrl: './doc-altas.component.html',
  styleUrls: ['./doc-altas.component.css']
})
export class DocAltasComponent implements OnInit {

  nombreDocumento: string = ""
  error: boolean = false
  status: boolean = false
  loading: boolean = false;
  numeroLineas: number = 0;
  archivoAltas: any = []

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
        var woorksheet = woorkbook.getWorksheet("Estructura");
        this.nombreDocumento = file.name
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>4){
            let user: any= {};
            const socio = row.getCell(11).value
            if(socio == "TEKNEI" || socio =="TEMM"){
              user.socio = socio;
              user.idpdv = row.getCell(9).value
              user.idred = row.getCell(14).value
              user.cuotaPrepago = row.getCell(16).value
              user.cuotaPospago = row.getCell(17).value
              user.cuotaIlimitado = row.getCell(18).value
              user.altasPrepago = row.getCell(19).value
              user.altasPospago = row.getCell(20).value
              user.altasIlimitado = row.getCell(21).value
              this.archivoAltas.push(user)
            }
            this.numeroLineas++
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
