import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Tienda } from './interface/tiendas.interface';
import { TiendasService } from './services/tiendas.service';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyecto';
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  filtroTiendas: Observable<Tienda[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];
  tiendas: Tienda[] = []

  valor: any;

  constructor(public _tiendas: TiendasService) {
    // this._tiendas.obtenerTiendas().subscribe((data)=>{
    //   this.tiendas = data as Tienda[]
    //   console.log(this.tiendas);
    // })
    this.tiendas = this._tiendas.tiendas;
    this.filtroTiendas = this.stateCtrl.valueChanges.pipe(
      startWith(""),
      map(tienda => (tienda? this._filtroTiendas(tienda) : this.tiendas.slice()))
    )
  }

  private _filtroTiendas(value: string): Tienda[] {
    const filtroValor = value.toString().toLowerCase();
    console.log(this.tiendas.filter(tienda => tienda.IDPDV.toString().includes(filtroValor)
                                            || tienda.TIENDA.includes(filtroValor)
    ));
    
    return this.tiendas.filter(tienda => tienda.IDPDV.toString().includes(filtroValor) || tienda.TIENDA.toLowerCase().includes(filtroValor))
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }
}
