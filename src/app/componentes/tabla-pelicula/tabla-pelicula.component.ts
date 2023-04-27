import { Component, OnInit } from '@angular/core';
//import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {


  constructor() {

   
   }

  ngOnInit(): void {
  }

      // lista hardcodeada
      listaPelicula = [
        { id: 0, nombre: 'movie 1', tipo: 'terror', fecha_estreno: '01-02-2023', 
          cantidad_publico: 40, foto_pelicula: 'foto pelicula'},   
        { id: 1, nombre: 'movie 2', tipo: 'comedia', fecha_estreno: '01-03-2023', 
          cantidad_publico: 30, foto_pelicula: 'foto pelicula'},   
        { id: 2, nombre: 'movie 3', tipo: 'romantica', fecha_estreno: '01-04-2023', 
          cantidad_publico: 20, foto_pelicula: 'foto pelicula'},     
    ];
}
