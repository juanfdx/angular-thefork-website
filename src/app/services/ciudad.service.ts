import { Injectable } from '@angular/core';
import { Ciudad } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  ciudadesEspana : Array<Ciudad> = [
    {
      nombre : 'Madrid',
      imagen : 'assets/images/city/madrid.webp'
    },
    {
      nombre : 'Barcelona',
      imagen : 'assets/images/city/barcelona.jpg'
    },
    {
      nombre : 'Valencia', 
      imagen : 'assets/images/city/valencia.webp',
    },
    {
      nombre : 'Sevilla', 
      imagen : 'assets/images/city/sevilla.jpg',
    },
    {
      nombre : 'Zaragoza', 
      imagen : 'assets/images/city/zaragoza.webp',
    },
    {
      nombre : 'Bilbao', 
      imagen : 'assets/images/city/bilbao.webp',
    },
    {
      nombre : 'Granada', 
      imagen : 'assets/images/city/granada.webp',
    },
    {
      nombre : 'Málaga', 
      imagen : 'assets/images/city/malaga.webp',
    },
    {
      nombre : 'Alicante', 
      imagen : 'assets/images/city/alicante.webp',
    },
    {
      nombre : 'Gijón', 
      imagen : 'assets/images/city/gijon.webp',
    },
    {
      nombre : 'Toledo', 
      imagen : 'assets/images/city/toledo.webp',
    },
    {
      nombre : 'Palma de Mallorca', 
      imagen : 'assets/images/city/palma-mallorca.jpg',
    },
  ]

  ciudadesMundo : Array<Ciudad> = [
      {
        nombre : 'Paris',
        imagen : 'assets/images/cityxl/paris.webp'
      },
      {
        nombre : 'Lyon',
        imagen : 'assets/images/cityxl/lyon.webp'
      },
      {
        nombre : 'Marsellie',
        imagen : 'assets/images/cityxl/marsellie.webp'
      },
      {
        nombre : 'Roma',
        imagen : 'assets/images/cityxl/roma.webp'
      },
      {
        nombre : 'Milán',
        imagen : 'assets/images/cityxl/milan.webp'
      },
      {
        nombre : 'Turín',
        imagen : 'assets/images/cityxl/turin.webp'
      },
      {
        nombre : 'Ámsterdam',
        imagen : 'assets/images/cityxl/amsterdam.webp'
      },
      {
        nombre : 'Róterdam',
        imagen : 'assets/images/cityxl/roterdam.webp'
      },
      {
        nombre : 'Utrecht',
        imagen : 'assets/images/cityxl/utrecht.webp'
      },
      {
        nombre : 'Lisboa',
        imagen : 'assets/images/cityxl/lisboa.webp'
      }
  ]

  constructor() { }
}
