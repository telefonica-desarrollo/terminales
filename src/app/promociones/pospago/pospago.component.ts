import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Promociones }  from "../../interface/tiendas.interface"
import { TerminalesService } from 'src/app/services/terminales.service';

const PROMOCIONES_PREPAGO: Promociones[] =[
  {
    MARCA: "Huawei",
    MODELO: "Huawei Y7A",
    PRECIO_INICIAL: 5799,
    PRECIO_FINAL: 4899,
    CANTIDAD: 2,
    DESCUENTO: 0.16
  },
  {
    MARCA: "Samsung",
    MODELO: "Samsung Galaxy A22 Negro",
    PRECIO_INICIAL: 4139,
    PRECIO_FINAL: 3729,
    CANTIDAD: 11,
    DESCUENTO: 0.10
  },
  {
    MARCA: "Motorola",
    MODELO: "Motorola E6i",
    PRECIO_INICIAL: 3299,
    PRECIO_FINAL: 2999,
    CANTIDAD: 4,
    DESCUENTO: 0.9
  },
  {
    MARCA: "Oppo",
    MODELO: "Oppo A53",
    PRECIO_INICIAL: 5499,
    PRECIO_FINAL: 4999,
    CANTIDAD: 2,
    DESCUENTO: 0.9
  }
] 


@Component({
  selector: 'app-pospago',
  templateUrl: './pospago.component.html',
  styleUrls: ['./pospago.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PospagoComponent implements OnInit {

  constructor(private terminales: TerminalesService) {
    this.data = this.terminales.obtenerPromocionesPospago()
    //Ordenar data
    this.data.sort((a: any , b: any )=> {
      if(a.PORCENTAJE == b.PORCENTAJE) return 0
      if(a.PORCENTAJE > b.PORCENTAJE ) return 1
      return -1
    })
    this.dataSave = this.data
    this.filtro()
  }
  
  data: any = [];
  dataSave: any = []
  marcas: any = [];
  mensajeTasa: string = "De contado";
  valueTasa: number = 0;

  valorPayjoy: any = 0;
  valorMarcas: string = "Todas";
  valorModelo: any = "";
  valorGastoMaximo: any = 25000;

  valorTasas: any = "0"
  
  columnsToDisplay2 = ['MODELO', 'PRECIO_INICIAL', 'PRECIO_FINAL', 'COMISION'];
  expandedElement: Promociones[] | null;

  ngOnInit(): void {
  }
  
  obtenerCatalogo(){
    //Obtener Catalogo de marcas
    this.marcas = []
    for(let promo of this.data){
      let validar = true
      for(let marca of this.marcas){
        if(marca == promo.MARCA) validar = false
      }
      if(validar) this.marcas.push(promo.MARCA)
    }
    if(this.data.length == 0 && this.valorMarcas != "Todas"){
      this.marcas.push(this.valorMarcas)
    }
    //Ordenar Catalogo de marcas
    this.marcas.sort()
  }
  obtenerDataGuardada(){
    //Obtener Data guardada
    if(localStorage.getItem("tasa_renovacion")){
      this.valorTasas = localStorage.getItem("tasa_renovacion")
    }
    if(localStorage.getItem("marca_renovacion")){
      const marca: any = localStorage.getItem("marca_renovacion")
      this.valorMarcas = marca
    }
    if(localStorage.getItem("payjoy_renovacion")){
      this.valorPayjoy = localStorage.getItem("payjoy_renovacion")
    }
    this.filtro()
  }
  obtenerMarca(e: any){
    this.valorMarcas = e
    this.filtro()
  }
  obtenerGastoMaximo(e: any){
    this.valorGastoMaximo = e
    this.filtro()
  }
  guardarData(){
  }

  //FILTROOOOOOOOOOOS
  filtro(){
    this.data  = this.dataSave
    
    const modelo = this.valorModelo.toLowerCase();
    const marca = this.valorMarcas;
    const payjoy = this.valorPayjoy;
    const gasto = this.valorGastoMaximo;

    if(marca == "Todas"){
      this.data = this.dataSave.filter((data: any) => data.MODELO.toLowerCase().includes(modelo) && 
                                                      data.PVP < gasto)
      this.obtenerCatalogo();
    }
    else{
      this.data = this.dataSave.filter((data: any) => data.MODELO.toLowerCase().includes(modelo) &&
                                                      data.PVP < gasto)
      this.obtenerCatalogo();
      this.data = this.data.filter((data: any)=> data.MARCA == marca)
    }
    //Validacion de payjoy ... 
  }
  filtroTasa(tasa: any){
  
    if(tasa == 0){
      this.mensajeTasa = "de contado"
      this.valueTasa = 0 
    }
    if(tasa == 12){
      this.mensajeTasa = "a 12 meses"
      this.valueTasa = 0.09
    }
    if(tasa == 18){
      this.mensajeTasa = "a 18 meses"
      this.valueTasa = 0.14
    }
    if(tasa == 24){
      this.mensajeTasa = "a 24 meses"
      this.valueTasa = 0.20
    }
    localStorage.setItem("tasa_renovacion", tasa);
  }
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
