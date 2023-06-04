import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
import { addDoc, collection, collectionData, Firestore, getDoc,
  getDocs, updateDoc, deleteDoc, doc, setDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private firestore: Firestore) { }

  getActores(): Observable<Actor[]>{
    const col = collection(this.firestore, 'actores');
    return collectionData(col, {idField: "id"}) as Observable<Actor[]>;
  }

  guardarActor(actor: Actor){

    const col = collection(this.firestore, 'actores');

    const docRef = addDoc(col, {
        nombre: actor.nombre,
        apellido: actor.apellido,
        ciudad: actor.ciudad,
        mail: actor.mail,
        pais: actor.pais
      })
      .then((docRef) => {
        console.log('Actor agregado con ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar actor:', error);
      });
      
  }

  modificarActor(actor: Actor, id:string){
    const documento = doc(collection(this.firestore, 'actores'), id);
    updateDoc(documento, {
      'nombre': actor.nombre,
      'apellido': actor.apellido,
      'ciudad': actor.ciudad,
      'mail': actor.mail,
      'pais': actor.pais,
    });
    //mod los datos especificos
  }

  eliminarActor(id: string){
    const documento = doc(collection(this.firestore, 'actores'), id);
    deleteDoc(documento);
  }
}
