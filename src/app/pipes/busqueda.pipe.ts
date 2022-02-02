import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let nuevoArray : any
    let [termino, tipo] = args

    if ( tipo === 'nombre' ) {
      nuevoArray = value.filter( (restaurante : any) => {
                         return restaurante.nombre.toLowerCase().includes( termino.toLowerCase())
                      })
    } 

    if ( tipo === 'ciudad' ) {
      nuevoArray = value.filter( (restaurante : any) => {
                         return restaurante.ciudad.toLowerCase().includes( termino.toLowerCase())
                      })
    } 

    return nuevoArray;
  }

}
