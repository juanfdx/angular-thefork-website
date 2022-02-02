import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { InicioComponent } from './inicio/inicio.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ContactComponent } from './contact/contact.component';
import { ProgramaYumsComponent } from './programa-yums/programa-yums.component';
import { CondicionesUsoComponent } from './condiciones-uso/condiciones-uso.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TarjetaRegaloComponent } from './tarjeta-regalo/tarjeta-regalo.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    InicioComponent,
    RestauranteComponent,
    ContactComponent,
    ProgramaYumsComponent,
    CondicionesUsoComponent,
    PrivacidadComponent,
    BlogComponent,
    TarjetaRegaloComponent,
    RegistroComponent
  ],
  exports: [
    InicioComponent,
    RestauranteComponent,
    ContactComponent,
    ProgramaYumsComponent,
    CondicionesUsoComponent,
    PrivacidadComponent,
    BlogComponent,
    TarjetaRegaloComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
