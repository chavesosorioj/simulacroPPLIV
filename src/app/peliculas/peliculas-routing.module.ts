import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';
import { BienvenidoComponent } from '../componentes/bienvenido/bienvenido.component';
import { TablaPeliculaComponent } from '../componentes/tabla-pelicula/tabla-pelicula.component';


const routes: Routes = [
  {path: 'listado-peliculas', component:ListadoPeliculasComponent},
  {path: 'alta-peliculas', component:AltaPeliculasComponent},
  {path: '**', component:BienvenidoComponent} //no se si este esta bien
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
