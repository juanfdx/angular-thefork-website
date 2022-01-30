import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.scss']
})
export class ComoFuncionaComponent implements OnInit {

  position    : number = 0
  imgShow     : number = 1
  imgAmount   : number = 4 //this.images.length
  slideMoveX  : number = this.imgAmount / this.imgShow // slideMoveX = 4


  constructor() { }

  ngOnInit(): void {
  }


  itemSelected( i : number): void {
    this.position = i   
  }

  //ancho del slider
  slideWidth(): string {
    return `${ this.slideMoveX * 100 }%` //400%
  }

  //ancho de cada articulo
  articleWidth(): string {
    return `${ 100 / this.imgAmount }%` 
  }

  //valor de desplazamiento
  translateXvalue(): string {
    return `translateX(${ this.position * -( 100 / this.slideMoveX )}%)`
  }

}
