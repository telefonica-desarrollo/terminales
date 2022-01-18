import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private rutaApi: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  login(data: any){
    return this.http.post(`${this.rutaApi}/login`, data)
  }

  //USUARIOS
  obtenerUsuario(usuario: any){
    const data=  {usuario: usuario}
    return this.http.post(`${this.rutaApi}/obtener/usuario`, data)
  }

  //TIENDAS
  obtenerTiendas(){
    return this.http.get(`${this.rutaApi}/obtener/tiendas`)
  }
  agregarTienda(data: any){
    return this.http.post(`${this.rutaApi}/login`, data)
  }

  //TERMINALES
  obtenerTerminales(){
    return this.http.get(`${this.rutaApi}/obtener/terminales`);
  }
  agregarTerminales(data: any){
    return this.http.post(`${this.rutaApi}/agregar/terminal`, data)
  }

  //PROMOCIONES
  obtenerPromocionesPrepago(){
    return this.http.get(`${this.rutaApi}/obtener/promociones/prepago`);
  }
  obtenerPromocionesPospago(){
    return this.http.get(`${this.rutaApi}/obtener/promociones/pospago`);
  }
  obtenerPromocionesRenovacion(){
    return this.http.get(`${this.rutaApi}/obtener/promociones/renovacion`);
  }
  agregarPromocionPrepago(data: any){
    return this.http.post(`${this.rutaApi}/agregar/promociones/prepago`, data)
  }
  agregarPromocionPospago(data: any){
    return this.http.post(`${this.rutaApi}/agregar/promociones/pospago`, data)
  }
  agregarPromocionRenovacion(data: any){
    return this.http.post(`${this.rutaApi}/agregar/promociones/renovacion`, data)
  }

  //INVENTARIO
  agregarInventario(data: any){
    return this.http.post(`${this.rutaApi}/agregar/inventario`, data)
  }
  obtenerInventario(data: any){
    return this.http.post(`${this.rutaApi}/obtener/inventario`, data)
  }
  



  
}
