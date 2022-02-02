import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescuentoPipe } from './descuento.pipe';
import { BusquedaPipe } from './busqueda.pipe';



@NgModule({
  declarations: [
    DescuentoPipe,
    BusquedaPipe
  ],
  exports: [
    DescuentoPipe,
    BusquedaPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
