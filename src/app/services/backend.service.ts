import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private rutaApi: string = "localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerTienda(){
    return this.http.get(`${this.rutaApi}/obtener/tiendas`);
  }
  obtenerPromocionesPrepago(){
    return this.http.get(`${this.rutaApi}/obtener/promociones/prepago`);
  }
  



  
}
