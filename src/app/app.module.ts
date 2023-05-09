import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';
import { FormsModule } from '@angular/forms';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';





//van aca? LOS SACO PORQUE ENTIENDO QUE NO SE USAN EN EL APP.MODULE
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { ListadoPeliculasComponent } from './componentes/peliculas/listado-peliculas/listado-peliculas.component';
import { AltaPeliculasComponent } from './componentes/peliculas/alta-peliculas/alta-peliculas.component';
import { AltaActoresComponent } from './actores/alta-actores/alta-actores.component';
import { ModificarPeliculaComponent } from './componentes/modificar-pelicula/modificar-pelicula.component';
import { BorrarPeliculaComponent } from './componentes/borrar-pelicula/borrar-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallePeliculaComponent,
    BusquedaComponent,
    BienvenidoComponent,
    LoginComponent,
    TablaPeliculaComponent,
    ListadoPeliculasComponent,
    AltaPeliculasComponent,
    AltaPeliculasComponent,
    ModificarPeliculaComponent,
    BorrarPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ShareModule,
    FormsModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
