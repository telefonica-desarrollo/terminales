import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioMensual'
})
export class PrecioMensualPipe implements PipeTransform {

  transform(value: number, tasa: number, descuento: number, meses: number): number{
    const precio_con_tasa = value + (value*tasa)
    const precio_tasa_des = precio_con_tasa + (precio_con_tasa * descuento)
    const precio_mensual = precio_tasa_des / meses
    return precio_mensual;
  }

}
