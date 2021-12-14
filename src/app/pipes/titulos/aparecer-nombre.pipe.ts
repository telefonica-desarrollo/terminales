import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aparecerNombre'
})
export class AparecerNombrePipe implements PipeTransform {

  transform(value: string): string | null {
    let data = value;
    if(data.length>10){
      return data
    }
    return null;
  }

}
