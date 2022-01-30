import { Injectable } from '@angular/core';
import { Restaurante } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class RestautanteService {

  restaurantes : Array<Restaurante> = [
    {
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



  constructor() { }
}
