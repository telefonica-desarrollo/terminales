import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { PromocionesPrepagoComponent } from './promociones/promociones-prepago/promociones-prepago.component';
import { PromocionesPospagoComponent } from './promociones/promociones-pospago/promociones-pospago.component';
import { PromocionesRenovacionComponent } from './promociones/promociones-renovacion/promociones-renovacion.component';
import { AngMaterialModule } from '../ang-material-module/ang-material.module';
import { InventarioComponent } from './inventario/inventario.component';
import { RouterModule } from '@angular/router';
import { TiendasComponent } from './tiendas/tiendas.component';
import { NavbarAdminComponent } from './shared/navbar-admin/navbar-admin.component';
import { TerminalesComponent } from './terminales/terminales.component';
import { UsuariosComponent } from './usuarios/usuarios.component';




@NgModule({
  declarations: [
    PagePrincipalComponent,
    PromocionesPrepagoComponent,
    PromocionesPospagoComponent,
    PromocionesRenovacionComponent,
    InventarioComponent,
    TiendasComponent,
    NavbarAdminComponent,
    TerminalesComponent,
    UsuariosComponent
  ],
  exports: [
    NavbarAdminComponent
  ],
  imports: [
    CommonModule,
    AngMaterialModule,
    RouterModule
  ]
})
export class CargarPromModule { }
