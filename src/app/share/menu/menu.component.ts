import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit(): void {
  }

    altaPelicula(){
      this.rutas.navigate(['peliculas/alta-peliculas']);
    }
    listadoPelicula(){
      this.rutas.navigate(['peliculas/listado-peliculas']);
    }
    busquedaPelicula(){
      this.rutas.navigate(['busqueda']);
    }

    altaActores(){
      this.rutas.navigate(['actores/alta-actores']);
    }
    listadoActores(){
      this.rutas.navigate(['actores/listado-actores']);
    }
}
