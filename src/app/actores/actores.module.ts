import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresRoutingModule } from './actores-routing.module';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { TablaPaisesComponent } from '../componentes/tabla-paises/tabla-paises.component';
import { ShareModule } from '../share/share.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AltaActoresComponent,
    ListadoActoresComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class ActoresModule { }
