import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  datos?: Pelicula = undefined;

  constructor(private db:PeliculaService) { }

  ngOnInit(): void {
  }

  mostrarDatosPelicula(pelicula: Pelicula){
    console.log(this.datos);
    this.datos = pelicula;
  }


  modificarPeliculaB(pelicula:Pelicula){
    if(this.datos!== undefined){
      pelicula.id = this.datos.id;
      this.db.modificar(pelicula, this.datos.id);
      console.log(pelicula);
    }

  }

}
