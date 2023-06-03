import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/servicios/actores.service';
import { Pais } from 'src/app/clases/pais';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  datosPais:any|Pais;
  // auxActor:any|Actor;
  formAlta: FormGroup;

  constructor(public dbActor:ActoresService,
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
    if(this.datosPais !== Pais){
      this.datosPais = pais;
    }
  }

  submitForm(){
    console.log(this.formAlta.value);
     const auxActor = new Actor(
      this.formAlta.get('nombre')?.value,
      this.formAlta.get('apellido')?.value,
      this.formAlta.get('ciudad')?.value,
      this.formAlta.get('mail')?.value,
      this.datosPais.nombre);

      this.dbActor.guardarActor(auxActor);

  }
}

