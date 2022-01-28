import { Injectable } from '@angular/core';
import { Image, Url } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {

  footerLinks : Array<Url> = [
    { url : 'www//:quienes-somos1', name : '¿Quienes somos?', urlExt : 'https://quienessomos.eltenedor.es/' },
    { url : 'www//:quienes-somos', name : 'Programa Yums' },
    { url : 'www//:quienes-somos2', name : 'Informacion de contacto' },
    { url : 'www//:quienes-somos', name : 'Condiciones de uso' },
    { url : 'www//:quienes-somos3', name : '¿Tienes un restaurante?', urlExt : 'https://www.theforkmanager.com/es-es/b2c-referral?SFCID=7010P0000008WahQAE&cc=b2c-referral' },
    { url : 'www//:quienes-somos', name : 'Declaracion de privacidad y Cookies' },
    { url : 'www//:quienes-somos', name : 'Preguntas frecuentes', urlExt : 'https://support.thefork.com/s/?language=es' },
    { url : 'www//:quienes-somos', name : 'Aceptacion de cookies' },
    { url : 'www//:quienes-somos', name : 'Trabaja con nosotros', urlExt : 'https://careers.thefork.com/global/en' },
    { url : 'www//:quienes-somos', name : 'Blog' },
    { url : 'www//:quienes-somos', name : 'Colaboracion Guia MICHELIN', urlExt : 'https://guide.michelin.com/es/es' },
    { url : 'www//:quienes-somos', name : 'Tarjeta Regalo TheFork' },
  ]

  imagesApp : Array<Image> = [
    { src : '/assets/images/apple-store.svg', alt : 'apple store' },
    { src : '/assets/images/google-play.svg', alt : 'google play'}
  ]

  constructor() { }
}
