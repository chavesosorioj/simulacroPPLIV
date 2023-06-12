import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';


// import { ListadoPeliculasComponent } from './componentes/peliculas/listado-peliculas/listado-peliculas.component';
// import { AltaPeliculasComponent } from './componentes/peliculas/alta-peliculas/alta-peliculas.component';


const routes: Routes = [
  {path: 'bienvenido', component:BienvenidoComponent},
  {path: 'busqueda', component:BusquedaComponent},
  // {path: 'peliculas/listado', component:ListadoPeliculasComponent},
  // {path: 'pelicula/alta', component:AltaPeliculasComponent},
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


