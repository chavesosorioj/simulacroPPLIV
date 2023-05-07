import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDoc, getDocs, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { Pelicula } from '../clases/pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private firestore: Firestore) { }

  getPeliculas(): Observable<Pelicula[]>{
    const col = collection(this.firestore, 'peliculas');
    return collectionData(col, {idField: "id"}) as Observable<Pelicula[]>;
  }

  setPelicula(){

  }

  // modificar(pelicula: Pelicula){
  //   const coleccion = collection(this.firestore, 'peliculas');
  //   const documento = doc(coleccion, pelicula.id);
  //   updateDoc(documento, {pelicula});
  // }

  eliminar(id: string){
    const coleccion = collection(this.firestore, 'peliculas');
    const documento = doc(coleccion, id);
    deleteDoc(documento);
  }



}
