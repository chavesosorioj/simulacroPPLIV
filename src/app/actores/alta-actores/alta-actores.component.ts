import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/servicios/actores.service';
import { Pais } from 'src/app/clases/pais';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  datosPais:any|Pais;
  newActor:any|Actor;
  formAlta: FormGroup;

  constructor(private actorService:ActoresService,
              private formBuilder: FormBuilder) {
    this.formAlta = this.formBuilder.group({
      nombre: ['',[ Validators.required, Validators.minLength(4)]],
      apellido: ['',[ Validators.required, Validators.minLength(4)]],
      ciudad: ['',[ Validators.required, Validators.minLength(4)]],
      mail: ['',[ Validators.required, Validators.email]],
    });
   }


  ngOnInit(): void {
  }


  mostrarPais(pais:Pais){
    console.log('lo que llega en pais - parent', pais);
    if(this.datosPais !== Pais){
      this.datosPais = pais;
    }
  }

  submitForm(){
    console.log(this.formAlta.value);
  }
}

