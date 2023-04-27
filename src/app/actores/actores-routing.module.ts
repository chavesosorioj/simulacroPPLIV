import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { BienvenidoComponent } from '../componentes/bienvenido/bienvenido.component';


const routes: Routes = [
  {path: 'listado-actores', component:ListadoActoresComponent},
  {path: 'alta-actores', component:AltaActoresComponent},
  {path: '**', component:BienvenidoComponent} //no se si este esta bien
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
