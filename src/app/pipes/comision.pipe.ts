import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comision'
})
export class ComisionPipe implements PipeTransform {

  transform(value: number): number {
    const pvp = value
    const pvp_sin_iva = pvp - (pvp* 0.16)
    const comision = pvp * 0.02

    return comision;
  }

}
