import { Component, HostListener, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/interfaces/interfaces';
import { RestautanteService } from 'src/app/services/restautante.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  activoNombre : boolean = false
  activoCiudad : boolean = false

  nombre : string = ''
  ciudad : string = ''
  restaurantes : Array<Restaurante> = []

  constructor( private restauranteService : RestautanteService) { 
    this.restaurantes = restauranteService.restaurantes
  }

  ngOnInit(): void {
  }

  //click en cualquier parte cierra las listas
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {

    if (event.target.id !== 'idRestb01') {
      this.ocultarPorNombre()
    }
    if (event.target.id !== 'idCityb01') {
      this.ocultarPorCiudad()
    }
  }


  buscar(): void {
    console.log('hello');
    
  }

  mostrarPorNombre(): void {
    this.activoNombre = true
    this.activoCiudad = false
  }

  ocultarPorNombre(): void {
    this.activoNombre = false
    this.nombre = ''
  }

  mostrarPorCiudad(): void {
    this.activoCiudad = true
    this.activoNombre = false
  }

  ocultarPorCiudad(): void {
    this.activoCiudad = false
    this.ciudad = ''
  }

  
}
