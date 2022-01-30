import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/interfaces';
import { RestautanteService } from 'src/app/services/restautante.service';

@Component({
  selector: 'app-slider-restaurante',
  templateUrl: './slider-restaurante.component.html',
  styleUrls: ['./slider-restaurante.component.scss']
})
export class SliderRestauranteComponent implements OnInit {

  restaurantes : Array<Restaurante> = []

  left  : boolean = false
  right : boolean = false

  constructor( private restauranteService : RestautanteService ) { 
    this.restaurantes = restauranteService.restaurantes
  }

  ngOnInit(): void {
  }

  slideLeft(): void {
    this.right = false
    this.left = true
  }

  slideRight(): void {
    this.left = false
    this.right = true
  }

}
