import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { BienvenidoComponent } from '../componentes/bienvenido/bienvenido.component';



const routes: Routes = [
  {path: 'listado-peliculas', component:ListadoPeliculasComponent},
  {path: 'alta-peliculas', component:AltaPeliculasComponent},
  {path: '**', component:BienvenidoComponent} 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
