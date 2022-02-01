import { Component, Input, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slider-ciudad',
  templateUrl: './slider-ciudad.component.html',
  styleUrls: ['./slider-ciudad.component.scss']
})
export class SliderCiudadComponent implements OnInit {

  @Input() tipo : string = ''
  @Input() flechas : boolean = false
  @Input() titulo : string = '' || 'Mas ciudades'
  @Input() ciudades : Array<Ciudad> = []

  left  : boolean = true
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
