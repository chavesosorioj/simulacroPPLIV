import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private bd: PeliculaService) {}

  ngOnInit(): void {
    this.bd.getPeliculas().subscribe((data) => {
      data.forEach((pelicula) => {
        if(!this.peliculas.includes(pelicula))
          this.peliculas.push(pelicula);
      })
    });
  }

}
