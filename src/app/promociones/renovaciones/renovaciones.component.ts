import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Promociones }  from "../../interface/tiendas.interface"
import { TerminalesService } from 'src/app/services/terminales.service';

@Component({
  selector: 'app-renovaciones',
  templateUrl: './renovaciones.component.html',
  styleUrls: ['./renovaciones.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class RenovacionesComponent implements OnInit {

  constructor(private terminales: TerminalesService) {
    this.data = this.terminales.obtenerPromocionesRenovaciones()
    
    //Ordenar data
    this.data.sort((a: any , b: any )=> {
      if(a.PORCENTAJE == b.PORCENTAJE) return 0
      if(a.PORCENTAJE > b.PORCENTAJE ) return 1
      return -1
    })
    this.dataSave = this.data
    this.obtenerCatalogo()

    
  }

  data: any = [];
  dataSave: any = []
  marcas: any = [];
  mensajeTasa: string = "De contado";
  valueTasa: number = 0;

  valorPayjoy: any= false
  valorMarcas: string | null
  valorTasas: string | null = "0"
  valorModelo= ""
  valorGastoMaxmo: any = 25000;

  columnsToDisplay2 = ['MODELO', 'PRECIO_INICIAL', 'PRECIO_FINAL', 'COMISION'];
  expandedElement: Promociones[] | null;

  ngOnInit(): void {
  }

  obtenerCatalogo(){
    //Obtener Catalogo de marcas
    this.marcas = []
    for(let promo of this.dataSave){
      let validar = true
      for(let marca of this.marcas){
        if(marca == promo.MARCA) validar = false
      }
      if(validar) this.marcas.push(promo.MARCA)
    }
    //Ordenar Catalogo de marcas
    this.marcas.sort()
  }
  obtenerDataGuardada(){
    //Obtener Data guardada
    if(localStorage.getItem("tasa_renovacion")){
      this.valorTasas = localStorage.getItem("tasa_renovacion")
      this.filtroTasa(this.valorTasas)
    }
    if(localStorage.getItem("marca_renovacion")){
      this.valorMarcas = localStorage.getItem("marca_renovacion")
      this.filtroMarca(this.valorMarcas)
    }
    if(localStorage.getItem("payjoy_renovacion")){
      this.valorPayjoy = localStorage.getItem("payjoy_renovacion")
    }
  }

  //FILTROOOOOOOOOOOS

  filtroModelo(){
    const modelo = this.valorModelo.toLowerCase();
    const marca = this.valorMarcas;
    if(marca == "Todas"){
      this.data  = this.dataSave
      this.data = this.dataSave.filter((data: any) => data.MODELO.toLowerCase().includes(modelo))
    }
    else{
      this.data = this.dataSave.filter((data: any) => data.MARCA == marca &&  data.MODELO.toLowerCase().includes(modelo))
    }
  }

  filtroMarca(marca: any){
    const modelo = this.valorModelo.toLowerCase();
    localStorage.setItem("marca_renovacion", marca);
    this.valorMarcas = marca;

    if(marca == "Todas"){
      this.data  = this.dataSave
      this.data = this.dataSave.filter((data: any) => data.MODELO.toLowerCase().includes(modelo))
    }
    else{
      this.data = this.dataSave.filter((data: any) => data.MARCA == marca &&  data.MODELO.toLowerCase().includes(modelo))
    }
  }
  filtroPayjoy(){
    localStorage.setItem("payjoy_renovacion", this.valorPayjoy);
  }

  //DATA CAMBIA

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
  valorCambia(e: any){
    this.valorGastoMaxmo = e
    console.log(e);
  }
  
  
}
