import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { Tienda } from '../interface/modelos.interface';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  promocionesPrepago: boolean = true;

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
  obtenerTiendas(): Observable<Tienda[]>{
    return this.http.get(`${this.rutaApi}/obtener/tiendas`).pipe(
      map((data: any)=> {
        let tiendas: Tienda [] = [];
        data.forEach((tienda_BD: any) => {
          let tienda: Tienda = {
            TERRITORIO: "",
            REGION: "",
            SUBDIRECTOR_REGIONAL: "",
            SUBDIRECTOR_TERRITORIAL: "",
            LIDER_INTERNO: "",
            LIDER_SOCIO_COMERCIAL: "",
            STAFF: "",
            IDPDV: "",
            TIENDA: "",
            SOCIO_COMERCIAL: "",
            SAP: "",
            STATUS: 0,
            // ID_TIENDA: 0
          }
          tienda.IDPDV = tienda_BD.Idpdv,
          tienda.TERRITORIO = tienda_BD.Territorio,
          tienda.REGION = tienda_BD.Region, 
          tienda.SUBDIRECTOR_REGIONAL = tienda_BD.Subdirector_Regional, 
          tienda.SUBDIRECTOR_TERRITORIAL = tienda_BD.Subdirector_Territorial, 
          tienda.LIDER_INTERNO = tienda_BD.Lider_Interno, 
          tienda.LIDER_SOCIO_COMERCIAL = tienda_BD.Lider_Socio_Comercial, 
          tienda.STAFF = tienda_BD.Staff, 
          tienda.TIENDA = tienda_BD.Nombre_Tienda, 
          tienda.SOCIO_COMERCIAL = tienda_BD.Socio_Comercial, 
          tienda.SAP = tienda_BD.Sap,
          tienda.STATUS = tienda_BD.Status,
          tienda.ID_TIENDA = tienda_BD.Id_Tienda
          tiendas.push(tienda)
        })

        return tiendas;
      })
    ) //Mapear las tiendas
  }
  agregarTienda(data: any){
    return this.http.post(`${this.rutaApi}/agregar/tienda`, data)
  }
  modificarTienda(data: any){
    return this.http.post(`${this.rutaApi}/modificar/tienda`, data)
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
  eliminarPromocionPrepago(){
    return this.http.delete(`${this.rutaApi}/eliminar/promociones/prepago`)
  }
  eliminarPromocionPospago(){
    return this.http.delete(`${this.rutaApi}/eliminar/promociones/pospago`)
  }
  eliminarPromocionRenovacion(){
    return this.http.delete(`${this.rutaApi}/eliminar/promociones/renovacion`)
  }

  //INVENTARIO
  agregarInventario(data: any){
    return this.http.post(`${this.rutaApi}/agregar/inventario`, data)
  }
  obtenerInventario(data: any){
    return this.http.post(`${this.rutaApi}/obtener/inventario`, data)
  }
  eliminarInventario(){
    return this.http.delete(`${this.rutaApi}/eliminar/inventario`)
  }
  
  
}
