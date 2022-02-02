import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { CondicionesUsoComponent } from './pages/condiciones-uso/condiciones-uso.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { ProgramaYumsComponent } from './pages/programa-yums/programa-yums.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RestauranteComponent } from './pages/restaurante/restaurante.component';
import { TarjetaRegaloComponent } from './pages/tarjeta-regalo/tarjeta-regalo.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'restaurante/:id', component: RestauranteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'yums', component: ProgramaYumsComponent },
  { path: 'condiciones-uso', component: CondicionesUsoComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'tarjeta-regalo', component: TarjetaRegaloComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
