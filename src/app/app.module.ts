import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AppRoutingModule } from './app-routing.module';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    BusquedaComponent,
    BienvenidoComponent,
   // MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
