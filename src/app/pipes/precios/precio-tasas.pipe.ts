import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioTasas'
})
export class PrecioTasasPipe implements PipeTransform {

  transform(value: number, tasa: number, descuento = 0): number{
      const precio_con_tasa = value + (value*tasa)
      const precio_tasa_des = precio_con_tasa + (precio_con_tasa * descuento)
      return precio_tasa_des;
  }

}
