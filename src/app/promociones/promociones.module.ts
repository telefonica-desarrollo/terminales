import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { PrepagoComponent } from './prepago/prepago.component';
import { PospagoComponent } from './pospago/pospago.component';
import { RenovacionesComponent } from './renovaciones/renovaciones.component';
import { HomeComponent } from './home/home.component';
import { PipesModule } from '../pipes/pipes.module';
import { AngMaterialModule } from '../ang-material-module/ang-material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    PrepagoComponent,
    PospagoComponent,
    RenovacionesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    AngMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PromocionesModule { }
