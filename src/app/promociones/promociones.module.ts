import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { PrepagoComponent } from './prepago/prepago.component';
import { PospagoComponent } from './pospago/pospago.component';
import { RenovacionesComponent } from './renovaciones/renovaciones.component';
import { HomeComponent } from './home/home.component';
import { InfoTiendaComponent } from './shared/info-tienda/info-tienda.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PipesModule } from '../pipes/pipes.module';
import { AngMaterialModule } from '../ang-material-module/ang-material.module';
import { NavtabsComponent } from './shared/navtabs/navtabs.component';


@NgModule({
  declarations: [
    PrepagoComponent,
    PospagoComponent,
    RenovacionesComponent,
    HomeComponent,

    InfoTiendaComponent,
    NavbarComponent,
    NavtabsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
    PipesModule,
    AngMaterialModule,
  ]
})
export class PromocionesModule { }
