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

  position    : number = 0
  imgShow     : number = 4
  imgAmount   : number = 8 //this.restaurantes.length // 8 //no los recibe 
  slideMoveX  : number = this.imgAmount / this.imgShow // 8/4 = 2 desplazamientos
  

  left  : boolean = true
  right : boolean = false

  constructor(  ) { }

  ngOnInit(): void {
  }


  //ancho del slider
  slideWidth(): string {
    return `${ this.slideMoveX * 100 }%` // 200%
  }

  //ancho de cada tarjeta o imagen
  articleWidth(): string {
    return `${ 100 / this.imgAmount }%` // 100 / 8 = 12.5%
  }

  //valor de desplazamiento
  translateXvalue(): string {
    return `translateX(${ this.position * ( -100 / this.slideMoveX ) }%)`
  }

  slideLeft(): void {
    // (this.position <= 0) ? this.position = this.slideMoveX - 1 : this.position--

    if (this.position <= 0) {
      // this.position = this.slideMoveX - 1
      this.left = true
      this.right = false

    } else {
      this.position--
      if (this.position <= 0) {
        this.left = true
        this.right = false
        
      }
    }
  }

  slideRight(): void {
    // (this.position >= this.slideMoveX - 1) ? this.position = 0 : this.position++ 

    if (this.position >= this.slideMoveX - 1) {
      // this.position = 0
      this.right = true
      this.left = false

    } else {
      this.position++
      this.left = false

      if (this.position >= this.slideMoveX - 1) {
        this.right = true
        this.left = false
      }
    }
  }

}
