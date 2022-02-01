import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestautanteService } from 'src/app/services/restautante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss']
})
export class RestauranteComponent implements OnInit {

  restaurante : any

  constructor( private activatedRouted : ActivatedRoute,
               private restauranteService : RestautanteService) { 

  }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe( ({ id }) => {

      this.restaurante = this.restauranteService.restaurantes.find( restaurante => {
        return restaurante.id === id
      })
      
    })
  }

}
