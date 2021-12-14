import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioMensual'
})
export class PrecioMensualPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
