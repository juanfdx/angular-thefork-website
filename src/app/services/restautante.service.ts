import { Injectable } from '@angular/core';
import { Restaurante } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class RestautanteService {

  restaurantes : Array<Restaurante> = [
    {
      insider     : true,
      imagen      : './assets/images/rest/antigua.webp',
      tipo        : ['mediterraneo', 'romántico'],
      nombre      : 'antigua',
      nota        : 9.4,
      pay         : false,
      direccion   : '08006 Barcelona',
      precioMedio : 30,
      descuento   : 50,
      yums        : true
    },
    {
      insider     : true,
      imagen      : './assets/images/rest/Tsukimi.webp',
      tipo        : ['japonés', 'grupos'],
      nombre      : 'tsukimi',
      nota        : 8.8,
      pay         : true,
      direccion   : '08036 Barcelona',
      precioMedio : 18,
      descuento   : 50,
      yums        : true
    },
    {
      insider     : false,
      imagen      : './assets/images/rest/kuche.webp',
      tipo        : ['mediterraneo', 'romántico'],
      nombre      : 'küche',
      nota        : 9.1,
      pay         : true,
      direccion   : '28028 Madrid',
      precioMedio : 25,
      descuento   : 40,
      yums        : false
    },
    {
      insider     : true,
      imagen      : './assets/images/rest/kippu.webp',
      tipo        : ['japonés', 'romántico'],
      nombre      : 'kippu',
      nota        : 9.4,
      pay         : false,
      direccion   : '28006 Madrid',
      precioMedio : 30,
      descuento   : 30,
      yums        : false
    },
    {
      insider     : true,
      imagen      : './assets/images/rest/antigua.webp',
      tipo        : ['mediterraneo', 'romántico'],
      nombre      : 'antigua',
      nota        : 9.4,
      pay         : false,
      direccion   : '08006 Barcelona',
      precioMedio : 30,
      descuento   : 50,
      yums        : true
    },
    {
      insider     : false,
      imagen      : './assets/images/rest/Tsukimi.webp',
      tipo        : ['japonés', 'grupos'],
      nombre      : 'tsukimi',
      nota        : 8.8,
      pay         : true,
      direccion   : '08036 Barcelona',
      precioMedio : 18,
      descuento   : 50,
      yums        : false
    },
    {
      insider     : false,
      imagen      : './assets/images/rest/kuche.webp',
      tipo        : ['mediterraneo', 'romántico'],
      nombre      : 'küche',
      nota        : 9.1,
      pay         : true,
      direccion   : '28028 Madrid',
      precioMedio : 25,
      descuento   : 40,
      yums        : false
    },
    {
      insider     : true,
      imagen      : './assets/images/rest/kippu.webp',
      tipo        : ['japonés', 'romántico'],
      nombre      : 'kippu',
      nota        : 9.4,
      pay         : false,
      direccion   : '28006 Madrid',
      precioMedio : 30,
      descuento   : 30,
      yums        : false
    }
  ]

  constructor() { }
}
