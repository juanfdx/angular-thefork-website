import { Component, OnInit } from '@angular/core';
import { SliderCiudad, SliderRestaurante } from 'src/app/interfaces/interfaces';
import { CiudadService } from 'src/app/services/ciudad.service';
import { RestautanteService } from 'src/app/services/restautante.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  slidersRestaurante : Array<SliderRestaurante> = []
  slidersCiudad : Array<SliderCiudad> = []

  constructor( private restauranteService : RestautanteService,
               private ciudadService : CiudadService) {

    this.slidersRestaurante = restauranteService.slidersRestaurante        
    this.slidersCiudad = ciudadService.slidersCiudad
  }

  ngOnInit(): void {
  }

}
