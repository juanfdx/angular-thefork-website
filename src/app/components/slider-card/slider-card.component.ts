import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})

export class SliderCardComponent implements OnInit {

  @Input() restaurante : any

  constructor() { }

  ngOnInit(): void {
  }

}
