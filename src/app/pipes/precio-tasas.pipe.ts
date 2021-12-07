import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioTasas'
})
export class PrecioTasasPipe implements PipeTransform {

  transform(value: number, tasa: number): number{
    const precio_con_tasa = value + (value*tasa)
    return precio_con_tasa;
  }

}
