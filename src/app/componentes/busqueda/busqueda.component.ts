import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../share/footer/footer.component';
import { MenuComponent } from '../../share/menu/menu.component';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';
// Y FALTARIA BORRAR Y MODIFICAR



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
