import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento'
})
export class DescuentoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    return '-' + value + '%';
  }

}
