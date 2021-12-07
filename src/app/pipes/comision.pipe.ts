import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comision'
})
export class ComisionPipe implements PipeTransform {

  transform(value: number, descuento: number): number {
    const pvp_inicial = value
    const pvp = pvp_inicial + (pvp_inicial * descuento)
    const pvp_sin_iva = pvp - (pvp * 0.16)
    const comision = pvp_sin_iva * 0.02

    return comision;
  }

}
