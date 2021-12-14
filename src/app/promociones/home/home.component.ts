import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, retry, startWith} from 'rxjs/operators';


import { Tienda } from './../../interface/tiendas.interface';
import { TiendasService } from './../../services/tiendas.service';

export interface State {
  flag: string;
  name: string;
  population: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'proyecto';
  stateCtrl = new FormControl();

  filtroTiendas: Observable<Tienda[]>;
  tiendas: Tienda[] = []
  tiendaSeleccionada: any;

  valor: any;

  constructor(public _tiendas: TiendasService) {
    // this._tiendas.obtenerTiendas().subscribe((data)=>{
    //   this.tiendas = data as Tienda[]
    //   console.log(this.tiendas);
    // })

    this.tiendas = this._tiendas.tiendas;
    console.log(this.tiendas);
    
    
    this.stateCtrl.valueChanges.subscribe((tienda)=> {
      this.tiendaSeleccionada = null;
      this.tiendas.forEach((btienda)=> {
        if(btienda.IDPDV === tienda){
          this.tiendaSeleccionada = btienda
          localStorage.setItem("idpdv", this.tiendaSeleccionada.IDPDV)
        }
      })
    })

    this.filtroTiendas = this.stateCtrl.valueChanges.pipe(
      startWith(""),
      map(tienda => this._filtroTiendas(tienda)),
    )

    if(localStorage.getItem("idpdv")){
      this.stateCtrl.setValue(Number(localStorage.getItem("idpdv")))
    }

  }

  private _filtroTiendas(value: string): Tienda[] {
    const filtroValor = value.toString().toLowerCase();
    return this.tiendas.filter(tienda => tienda.IDPDV.toString().includes(filtroValor) || tienda.TIENDA?.toLowerCase().includes(filtroValor))
  }


  ngOnInit(): void {
  }

}
