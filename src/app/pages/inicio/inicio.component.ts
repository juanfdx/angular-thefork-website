import { Component, OnInit } from '@angular/core';
import { Ciudad, Restaurante } from 'src/app/interfaces/interfaces';
import { CiudadService } from 'src/app/services/ciudad.service';
import { RestautanteService } from 'src/app/services/restautante.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  restParaTi     : Array<Restaurante> = []
  restMasYums    : Array<Restaurante> = []
  restMadrid     : Array<Restaurante> = []
  restBarcelona  : Array<Restaurante> = []
  restValencia   : Array<Restaurante> = []
  restSevilla    : Array<Restaurante> = []
  restZaragoza   : Array<Restaurante> = []
  
  ciudadesEspana : Array<Ciudad> = []
  ciudadesMundo  : Array<Ciudad> = []

  constructor( private restauranteService : RestautanteService,
               private ciudadService : CiudadService) {

    this.restParaTi = restauranteService.restaurantes
    this.restMasYums = restauranteService.restaurantes
    this.restMadrid = restauranteService.restaurantes
    this.restBarcelona = restauranteService.restaurantes
    this.restValencia = restauranteService.restaurantes
    this.restSevilla = restauranteService.restaurantes
    this.restZaragoza = restauranteService.restaurantes

    this.ciudadesEspana = ciudadService.ciudadesEspana
    this.ciudadesMundo = ciudadService.ciudadesMundo
  }

  ngOnInit(): void {
  }

}
