import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  datos?: Pelicula = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDatosPelicula(pelicula: Pelicula){
    console.log(this.datos);
    this.datos = pelicula;
  }

}
