import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Pais } from 'src/app/clases/pais';
import { collectionSnapshots } from '@angular/fire/firestore'; // esto creo que se puso automaticamente cuando updatee angular
@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  paises:Array<Pais>=[];
  slicePaises:Array<Pais>=[];
  paisSeleccionado:any|Pais;
  newPais:Pais =new Pais('','');
  @Output() selecPais = new EventEmitter<Pais>();

  constructor(private paisS:PaisesService) { }

  ngOnInit(): void {
    this.cargarPaises()
  }

  cargarPaises(){

    this.paisS.getPaises().subscribe((data)=>{
      for(let i=0; data.length>i;i++){
        // console.log(data[i].name.common);
        // console.log(data[i].flag);
         this.newPais ={
          'nombre': data[i].name.common,
          'foto':data[i].flag
        }
        this.paises.push(this.newPais);
      }
    });
    console.log(this.paises);

  }

  seleccionarPais(item: Pais){
    console.log(item);
    this.selecPais.emit(item);
  }


}
