import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slider-restaurante',
  templateUrl: './slider-restaurante.component.html',
  styleUrls: ['./slider-restaurante.component.scss']
})
export class SliderRestauranteComponent implements OnInit {

  @Input() titulo       : string = '' || 'Mas restaurantes'
  @Input() restaurantes : Array<Restaurante> = []
  @Input() flechas      : boolean = false

  position    : number = 0
  imgShow     : number = 4 //Nº imagenes a mostrar
  imgAmount   : number = 0 //Nº elementos en el array 
  slideMoveX  : number = 0 //veces que se desplaza el slide

  slideAncho     : number = 0
  slideTranslate : number = 0 //valor del desplazamientoX
  anchoCard      : number = 0 //ancho de la tarjeta o articulo 
  
  screenWidth: number = 0; //ancho de la ventana
  // screenHeight: any;

  left  : boolean = true
  right : boolean = false

  constructor(  ) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenWidthObs(this.screenWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    this.screenWidthObs(event.target.innerWidth)
  }

  //pasa el numero de imagenes a mostrar segun tamaño de pantalla
  screenWidthObs(screen : number): void {

    if (screen >= 1160) {
      this.resetSlider(4)
    }
    if (screen < 1160) {
      this.resetSlider(3)
    } 
    if (screen < 930) {
      this.resetSlider(2)
    } 
    if (screen < 530) {
      this.resetSlider(1)
    }
  }

  //recalcula medidas del slider segun el numero de imagenes a mostrar
  resetSlider(imgNumber: number): void {
    this.imgShow        = imgNumber
    this.imgAmount      = this.restaurantes.length
    this.slideMoveX     = this.imgAmount/ this.imgShow
    this.slideAncho     = this.slideMoveX * 100  
    this.slideTranslate = 100 / this.slideMoveX
    this.anchoCard      = 100 / this.restaurantes.length
  }

  //ancho del slider
  slideWidth(): string {
    return `${ this.slideAncho }%` // 200%
  }

  //ancho de cada tarjeta o imagen
  articleWidth(): string {
    return `${ this.anchoCard }%` // 100 / 8 = 12.5%
  }

  //valor de desplazamiento
  translateXvalue(): string {
    return `translateX(${ this.position * ( - this.slideTranslate ) }%)`
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


