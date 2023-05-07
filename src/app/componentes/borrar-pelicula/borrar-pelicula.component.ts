import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeliculaService } from 'src/app/servicios/pelicula.service';


@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent implements OnInit {

valor ='';
  @Input() valorTablaPeliculaPADRE:any;
  //creo que esto deberia ser una pelicula
  @Output() cambio = new EventEmitter<string>();

  constructor(private bd: PeliculaService) { }

  ngOnInit(): void {
  }

}
