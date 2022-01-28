import { Component, OnInit } from '@angular/core';
import { Image, Url } from 'src/app/interfaces/interfaces';
import { AplicacionService } from 'src/app/services/aplicacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLinks : Array<Url> = [ ]
  imagesApp : Array<Image> = [ ]

  constructor( private aplicacionService : AplicacionService,) { 
    this.footerLinks = aplicacionService.footerLinks
    this.imagesApp = aplicacionService.imagesApp
  }
  ngOnInit(): void { }

}
