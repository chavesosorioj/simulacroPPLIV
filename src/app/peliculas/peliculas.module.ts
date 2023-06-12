import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ShareModule } from '../share/share.module';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';
import { BusquedaComponent } from '../componentes/busqueda/busqueda.component';
import { TablaPeliculaComponent } from '../componentes/tabla-pelicula/tabla-pelicula.component';
import { BorrarPeliculaComponent } from '../componentes/borrar-pelicula/borrar-pelicula.component';
import { DetallePeliculaComponent } from '../componentes/detalle-pelicula/detalle-pelicula.component';
import { ModificarPeliculaComponent } from '../componentes/modificar-pelicula/modificar-pelicula.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AltaPeliculasComponent,
    ListadoPeliculasComponent,
    BusquedaComponent,
    BorrarPeliculaComponent,
    DetallePeliculaComponent,
    ModificarPeliculaComponent,
    TablaPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    ShareModule,
    FormsModule
  ]
})
export class PeliculasModule { }
