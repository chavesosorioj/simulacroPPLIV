import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  newPelicula:Pelicula = new Pelicula('', '','','',0,'');
  @Input() peliculaMod:undefined | Pelicula;
  @Output() peliculaModificada:EventEmitter<Pelicula> = new EventEmitter(); // nombre del evento


  constructor(private bd: PeliculaService) { }

  ngOnInit(): void {
  }

  modificarPelicula(newPelicula: Pelicula){
    console.log(newPelicula);
    this.peliculaModificada.emit(newPelicula)
  }

}

