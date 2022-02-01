import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { NuevaTarjetaComponent } from './nueva-tarjeta/nueva-tarjeta.component';
import { CardRestauranteComponent } from './card-restaurante/card-restaurante.component';
import { SliderRestauranteComponent } from './sliders/slider-restaurante/slider-restaurante.component';
import { SliderCiudadComponent } from './sliders/slider-ciudad/slider-ciudad.component';
import { EresPropietarioComponent } from './eres-propietario/eres-propietario.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { AcercaTheForkComponent } from './acerca-the-fork/acerca-the-fork.component';
import { AppRoutingModule } from '../app-routing.module';
import { FavoritosUsuariosComponent } from './favoritos-usuarios/favoritos-usuarios.component';
import { TextoYBotonComponent } from './texto-y-boton/texto-y-boton.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    NuevaTarjetaComponent,
    CardRestauranteComponent,
    SliderRestauranteComponent,
    SliderCiudadComponent,
    EresPropietarioComponent,
    ComoFuncionaComponent,
    AcercaTheForkComponent,
    FavoritosUsuariosComponent,
    TextoYBotonComponent,
    SliderCardComponent,
    RestaurantCardComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BuscadorComponent,
    NuevaTarjetaComponent,
    CardRestauranteComponent,
    SliderRestauranteComponent,
    SliderCiudadComponent,
    EresPropietarioComponent,
    ComoFuncionaComponent,
    AcercaTheForkComponent,
    FavoritosUsuariosComponent,
    TextoYBotonComponent,
    SliderCardComponent,
    RestaurantCardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
