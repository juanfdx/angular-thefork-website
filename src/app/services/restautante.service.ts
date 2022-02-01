import { Injectable } from '@angular/core';
import { Restaurante, SliderRestaurante } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class RestautanteService {

  restaurantes : Array<Restaurante> = [
    {
      id          : '1',
      insider     : true,
      imgRest     : './assets/images/rest/antigua.webp',
      imgCity     : '',
      tipo        : ['mediterraneo', 'romántico'],
      nombre      : 'antigua',
      nota        : 9.4,
      dobleYums   : true,
      pay         : false,
      direccion   : '08006 Barcelona',
      ciudad      : 'Barcelona',
      precioMedio : 30,
      descuento   : 50,
      yums        : true
    },
    {
      id          : '2',
      insider     : false,
      imgRest     : './assets/images/rest/Tsukimi.webp',
      imgCity     : '',
      tipo        : ['japonés', 'grupos'],
      nombre      : 'tsukimi',
      nota        : 8.8,
      dobleYums   : true,
      pay         : true,
      direccion   : '08036 Sevilla',
      ciudad      : 'Sevilla',
      precioMedio : 18,
      descuento   : 50,
      yums        : true
    },
    {
      id          : '3',
      insider     : false,
      imgRest     : './assets/images/rest/kuche.webp',
      imgCity     : '',
      tipo        : ['mediterraneo', 'romántico'],
      nombre      : 'küche',
      nota        : 9.1,
      dobleYums   : false,
      pay         : true,
      direccion   : '28028 Madrid',
      ciudad      : 'Madrid',
      precioMedio : 25,
      descuento   : 40,
      yums        : false
    },
    {
      id          : '4',
      insider     : true,
      imgRest     : './assets/images/rest/kippu.webp',
      imgCity     : '',
      tipo        : ['japonés', 'romántico'],
      nombre      : 'kippu',
      nota        : 9.4,
      dobleYums   : true,
      pay         : false,
      direccion   : '28006 Madrid',
      ciudad      : 'Madrid',
      precioMedio : 30,
      descuento   : 30,
      yums        : false
    },
    {
      id          : '5',
      insider     : true,
      imgRest     : './assets/images/rest/antigua.webp',
      imgCity     : '',
      tipo        : ['mediterraneo', 'romántico'],
      nombre      : 'antigua',
      nota        : 9.4,
      dobleYums   : true,
      pay         : false,
      direccion   : '08006 Barcelona',
      ciudad      : 'Barcelona',
      precioMedio : 30,
      descuento   : 50,
      yums        : true
    },
    {
      id          : '6',
      insider     : false,
      imgRest     : './assets/images/rest/Tsukimi.webp',
      imgCity     : '',
      tipo        : ['japonés', 'grupos'],
      nombre      : 'tsukimi',
      nota        : 8.8,
      dobleYums   : true,
      pay         : true,
      direccion   : '08036 Paris',
      ciudad      : 'Paris',
      precioMedio : 18,
      descuento   : 50,
      yums        : false
    },
    {
      id          : '7',
      insider     : false,
      imgRest     : './assets/images/rest/kuche.webp',
      imgCity     : '',
      tipo        : ['mediterraneo', 'romántico'],
      nombre      : 'küche',
      nota        : 9.1,
      dobleYums   : true,
      pay         : true,
      direccion   : '28028 Madrid',
      ciudad      : 'Madrid',
      precioMedio : 25,
      descuento   : 40,
      yums        : false
    },
    {
      id          : '8',
      insider     : true,
      imgRest     : './assets/images/rest/kippu.webp',
      imgCity     : '',
      tipo        : ['japonés', 'romántico'],
      nombre      : 'kippu',
      nota        : 9.4,
      dobleYums   : true,
      pay         : false,
      direccion   : '28006 Valencia',
      ciudad      : 'Valencia',
      precioMedio : 30,
      descuento   : 30,
      yums        : true
    }
  ]

  slidersRestaurante : Array<SliderRestaurante> = [
    {
      titulo       : 'Selecciones de TheFork',
      flechas      : true ,
      restaurantes : this.restaurantes
    },
    {
      titulo       : 'Selecciones para tí',
      flechas      : true ,
      restaurantes : this.restaurantes
    },
    {
      titulo       : 'Dónde puedo ganar más Yums?',
      flechas      : true ,
      restaurantes : this.restaurantes
    },
    {
      titulo       : 'Restaurantes populares en Madrid',
      flechas      : true ,
      restaurantes : this.restaurantes
    },
    {
      titulo       : 'Restaurantes populares en Barcelona',
      flechas      : true ,
      restaurantes : this.restaurantes
    },
    {
      titulo       : 'Restaurantes populares en Valencia',
      flechas      : true ,
      restaurantes : this.restaurantes
    },
    {
      titulo       : 'Restaurantes populares en Sevilla',
      flechas      : true ,
      restaurantes : this.restaurantes
    },
    {
      titulo       : 'Restaurantes populares en Zaragoza',
      flechas      : true ,
      restaurantes : this.restaurantes
    },
  ]



  constructor() { }
}
