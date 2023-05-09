import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';


@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent implements OnInit {

  @Input() peliculaB:undefined | Pelicula;
  @Output() peliculaBorrada:EventEmitter<Pelicula> = new EventEmitter(); // nombre del evento

  constructor() { }

  ngOnInit(): void {
  }

  borrarPelicula(peliculaB:Pelicula){
    this.peliculaBorrada.emit(peliculaB);
  }
}
