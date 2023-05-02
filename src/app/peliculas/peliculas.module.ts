import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';
import { ShareModule } from '../share/share.module';
import { TablaPeliculaComponent } from '../componentes/tabla-pelicula/tabla-pelicula.component';



@NgModule({
  declarations: [
    ListadoPeliculasComponent,
    AltaPeliculasComponent,
    TablaPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule, 
    ShareModule,
  ]
})
export class PeliculasModule { }
