import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
//import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
//import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';


const routes: Routes = [
  {path: 'bienvenido', component:BienvenidoComponent},
  {path: 'busqueda', component:BusquedaComponent},
  {path: 'peliculas',
          loadChildren: () => import('./peliculas/peliculas.module')
          .then(m => m.PeliculasModule)
  },
  {path: 'actores',
          loadChildren: () => import('./actores/actores.module')
          .then(m => m.ActoresModule)
  },
  {path: '**', component:BienvenidoComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


