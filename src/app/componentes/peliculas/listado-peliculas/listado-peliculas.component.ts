import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { EventEmitter, Output } from '@angular/core';
import { TablaPeliculaComponent } from 'src/app/componentes/tabla-pelicula/tabla-pelicula.component';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  //tablaPeliculas: TablaPeliculaComponent | undefined; // el undefined es un quick fix que me agrego, VER SI LO SACO
  
  constructor() { }

  ngOnInit(): void {
  }

  public peliculas: Pelicula[] = []
 
 
 
  //esto sacarlo de aca y llamar desde la clase - firebase
  listaPelicula = [
    { id: 0, nombre: 'movie 1', tipo: 'terror', this_fecha_estreno: '01-02-2023', this_cantidad_publico: 40, foto_pelicula: 'foto pelicula'},   
    { id: 1, nombre: 'movie 2', tipo: 'comedia', this_fecha_estreno: '01-03-2023', this_cantidad_publico: 30, foto_pelicula: 'foto pelicula'},   
    { id: 3, nombre: 'movie 3', tipo: 'romantica', this_fecha_estreno: '01-04-2023', this_cantidad_publico: 20, foto_pelicula: 'foto pelicula'},     
];
}
