import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AppRoutingModule } from './app-routing.module';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ShareModule } from './share/share.module';
import { LoginComponent } from './componentes/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    DetallePeliculaComponent,
    BusquedaComponent,
    BienvenidoComponent,
    LoginComponent,
   // MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ShareModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
