import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slider-restaurante',
  templateUrl: './slider-restaurante.component.html',
  styleUrls: ['./slider-restaurante.component.scss']
})
export class SliderRestauranteComponent implements OnInit {

  @Input() titulo : string = '' || 'Mas restaurantes'
  @Input() restaurantes : Array<Restaurante> = []
  

  left  : boolean = false
  right : boolean = false

  constructor(  ) { }

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
