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
    MARCA: "Xiaomi",
    MODELO: "Xiaomi Redmi 9",
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
  selector: 'app-prepago',
  templateUrl: './prepago.component.html',
  styleUrls: ['./prepago.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger("fade", [
      transition("void => *", [
        style({opacity: 0}),
        animate(200,style({opacity:1}))
      ])
    ])
  ],
})
export class PrepagoComponent implements OnInit {

  constructor(private terminales: TerminalesService) { 
    this.data = this.terminales.obtenerPromocionesPrepago();

    //Ordenar data
    this.data.sort((a: any , b: any )=> {
      if(a.PORCENTAJE == b.PORCENTAJE) return 0
      if(a.PORCENTAJE > b.PORCENTAJE ) return 1
      return -1
    })
    //Obtener Catalogo de marcas
    for(let promo of this.data){
      let validar = true
      for(let marca of this.marcas){
        if(marca == promo.MARCA) validar = false
      }
      if(validar) this.marcas.push(promo.MARCA)
    }
    this.dataSave = this.data
    
  }

  data: any = [];
  dataSave: any = []
  marcas: any = [];

  columnsToDisplay2 = ['MODELO', 'PRECIO_INICIAL', 'PRECIO_FINAL', 'COMISION'];
  expandedElement: Promociones[] | null;

  ngOnInit(): void {
  }

  filtroMarca(marca: any){
    this.data = []
    if(marca == "Todas") this.data  = this.dataSave
    else{
      this.dataSave.forEach((promocion: any) => {
        if(promocion.MARCA == marca) this.data.push(promocion)
      });
    }
    console.table(this.data)
  }



}
