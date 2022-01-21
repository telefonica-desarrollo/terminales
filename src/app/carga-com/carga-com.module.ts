import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DocAltasComponent} from "./doc-altas/doc-altas.component"
import {PagePrincipalComComponent} from "./page-principal-com/page-principal-com.component"
import { AngMaterialModule } from '../ang-material-module/ang-material.module';
import { RouterModule } from '@angular/router';
import { CargarPromModule } from '../cargar-prom/cargar-prom.module';

@NgModule({
  declarations: [
    DocAltasComponent,
    PagePrincipalComComponent
  ],
  imports: [
    CommonModule,
    AngMaterialModule,
    RouterModule,
    CargarPromModule
  ]
})
export class CargaComModule { }
