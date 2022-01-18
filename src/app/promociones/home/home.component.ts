import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Router} from "@angular/router"
import {map, retry, startWith} from 'rxjs/operators';


import { Tienda } from './../../interface/tiendas.interface';
import { TiendasService } from './../../services/tiendas.service';
import { BackendService } from 'src/app/services/backend.service';

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
  usuarioLocal: string | null = "";
  usuario = []
  tiendaSeleccionada: any;

  valor: any;

  constructor(private router: Router, private be_service: BackendService) {
  }
  ngOnInit(): void {
    this.usuarioLocal = localStorage.getItem("Usuario")
    this.be_service.obtenerUsuario(this.usuarioLocal).subscribe((data: any)=>{
      console.log(data);
      this.tiendaSeleccionada = {
        TERRITORIO: data.Territorio,
        TIENDA: data.Nombre_Tienda,
        IDPDV: data.Idpdv
      }
      this.usuario;
      localStorage.setItem("Id_Tienda", data.Id_Tienda)
      this.router.navigate(["/home/prepago"])    
    })
  }

}
