import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresRoutingModule } from './actores-routing.module';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [
    AltaActoresComponent,
    ListadoActoresComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    ShareModule
  ]
})
export class ActoresModule { }
