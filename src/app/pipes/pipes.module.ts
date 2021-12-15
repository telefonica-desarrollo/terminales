import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReducirNombrePipe } from './titulos/reducir-nombre.pipe';
import { AparecerNombrePipe } from './titulos/aparecer-nombre.pipe';

import { ComisionPipe } from './comision/comision.pipe';

import { PrecioTasasPipe } from './precios/precio-tasas.pipe';
import { PrecioFinalPipe } from './precios/precio-final.pipe';
import { PrecioMensualPipe } from './precios/precio-mensual.pipe';
import { PromocionesModule } from '../promociones/promociones.module';



@NgModule({
  declarations: [
    ReducirNombrePipe,
    ComisionPipe,
    AparecerNombrePipe,
    PrecioTasasPipe,
    PrecioFinalPipe,
    PrecioMensualPipe,
  ],
  exports: [
    ReducirNombrePipe,
    ComisionPipe,
    AparecerNombrePipe,
    PrecioTasasPipe,
    PrecioFinalPipe,
    PrecioMensualPipe,
  ],
  imports: [
    CommonModule,
  ]
})
export class PipesModule { }
