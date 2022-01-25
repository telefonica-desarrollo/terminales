import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs"
import { Tienda } from 'src/app/interface/modelos.interface';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  nombreDocumento: string = ""
  error: boolean = false
  status: boolean = false
  loading: boolean = false;

  numeroLineas: number = 0;
  lineasSubidas: number = 0;

  tiendas: Tienda []
  terminales: any = []
  inventario: any = []

  constructor(private be_service: BackendService) {
    this.be_service.obtenerTiendas().subscribe((data: Tienda[])=>{
      this.tiendas = data
      console.log(this.tiendas);
    })
    this.be_service.obtenerTerminales().subscribe((data: any)=> {
      this.terminales = data
    })
   } 

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
            const Lote = row.getCell(7).value;
            if(Lote == "NUEVO"){
              let filaInventario: any = {}
              filaInventario.SAP = row.getCell(2).value;
              filaInventario.SKU = row.getCell(4).value;
              filaInventario.CANTIDAD = row.getCell(8).value
              this.tiendas.forEach((tienda: Tienda) => {
                if(filaInventario.SAP == tienda.SAP){
                  filaInventario.ID_TIENDA = tienda.ID_TIENDA
                  this.inventario.push(filaInventario)
                  this.numeroLineas++;
                }
              })
            }
          }
        })
      }).catch(()=> {
        this.error= true 
        this.nombreDocumento=""
        this.status = false;
      }).finally(()=>{
        console.log(this.inventario);
      })
    }
  }

  async statusInfo(){

    await this.be_service.eliminarPromocionPrepago().subscribe(()=> {});
    let i=0;
    this.inventario.forEach((inventario_fila: any) =>{
      let skuEntontrado = false
      inventario_fila.ID_TERMINAL = 0;

      this.terminales.forEach((terminal:any) => {
        if(inventario_fila.SKU == terminal.Sku){
          inventario_fila.ID_TERMINAL = terminal.Id_Terminal
          skuEntontrado = true;
        }
      })
      // if(!skuEntontrado) console.log("No encontramos SKU");

      
      this.be_service.agregarInventario(inventario_fila).subscribe((data) => {
        // console.log(data);
        this.lineasSubidas++

        if(this.lineasSubidas == this.inventario.length){
          this.status=true 
        }
      })
    })
  
  }

}
