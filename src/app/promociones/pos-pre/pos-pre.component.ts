import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Promociones }  from "../../interface/tiendas.interface"

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
  selector: 'app-pos-pre',
  templateUrl: './pos-pre.component.html',
  styleUrls: ['./pos-pre.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PosPreComponent implements OnInit {

  constructor() { }

  data = PROMOCIONES_PREPAGO;
  columnsToDisplay2 = ['MODELO', 'PRECIO_INICIAL', 'PRECIO_FINAL'];
  expandedElement: Promociones[] | null;

  ngOnInit(): void {
  }

}
