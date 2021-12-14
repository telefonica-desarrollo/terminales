import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducirNombre'
})
export class ReducirNombrePipe implements PipeTransform {

  transform(value: string): string {
    let data = value;
    if(data.length>10){
      data = data.substring(0,10)
      data = data.concat("...")
    }
    return data;
  }

}
