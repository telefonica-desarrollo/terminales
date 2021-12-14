import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioFinal'
})
export class PrecioFinalPipe implements PipeTransform {

  transform(value: number, descuento: number): number | null {
    const precio_inicial = value;
    const precio_final = precio_inicial + (descuento * precio_inicial)
    return precio_final;
  }
  
}
