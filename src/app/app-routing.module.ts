import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

// import { ListadoActoresComponent } from './actores/listado-actores/listado-actores.component';
// import { AltaActoresComponent } from './actores/alta-actores/alta-actores.component';

import { ListadoPeliculasComponent } from './componentes/peliculas/listado-peliculas/listado-peliculas.component';
import { AltaPeliculasComponent } from './componentes/peliculas/alta-peliculas/alta-peliculas.component';


//NO ESTOY SEGURA DE DEJARLO ASI, NO DEBERIAN TENER CHILDS?
//actores quedo como un modulo, lo deberia cambiar para que quede igual que peliculas
const routes: Routes = [
  {path: 'bienvenido', component:BienvenidoComponent},
  {path: 'busqueda', component:BusquedaComponent},
  {path: 'peliculas/listado', component:ListadoPeliculasComponent},
  {path: 'pelicula/alta', component:AltaPeliculasComponent},
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


