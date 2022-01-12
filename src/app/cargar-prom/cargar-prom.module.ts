import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { PromocionesPrepagoComponent } from './promociones-prepago/promociones-prepago.component';
import { PromocionesPospagoComponent } from './promociones-pospago/promociones-pospago.component';
import { PromocionesRenovacionComponent } from './promociones-renovacion/promociones-renovacion.component';
import { AngMaterialModule } from '../ang-material-module/ang-material.module';
import { InventarioComponent } from './inventario/inventario.component';



@NgModule({
  declarations: [
    PagePrincipalComponent,
    PromocionesPrepagoComponent,
    PromocionesPospagoComponent,
    PromocionesRenovacionComponent,
    InventarioComponent
  ],
  imports: [
    CommonModule,
    AngMaterialModule
  ]
})
export class CargarPromModule { }
