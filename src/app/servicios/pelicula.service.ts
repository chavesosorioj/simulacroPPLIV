import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDoc,
  getDocs, updateDoc, deleteDoc, doc, setDoc, CollectionReference } from '@angular/fire/firestore';
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

  guardarPelicula(pelicula: Pelicula){

    const col = collection(this.firestore, 'peliculas');

    const docRef = addDoc(col, {
        nombre: pelicula.nombre,
        tipo: pelicula.tipo,
        fecha_estreno: pelicula.fecha_estreno,
        cantidad_publico: pelicula.cantidad_publico
      })
      .then((docRef) => {
        console.log('Persona agregada con ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar persona:', error);
      });
      
  }

  modificar(pelicula: Pelicula, id:string){
    // const coleccion = collection(this.firestore, 'peliculas');
    const documento = doc(collection(this.firestore, 'peliculas'), id);
    updateDoc(documento, {
      'nombre': pelicula.nombre,
      'tipo': pelicula.tipo,
      'fecha_estreno': pelicula.fecha_estreno,
      'cantidad_publico': pelicula.cantidad_publico
    });
  }

  eliminar(id: string){
    // const coleccion = collection(this.firestore, 'peliculas');
    const documento = doc(collection(this.firestore, 'peliculas'), id);
    deleteDoc(documento);
  }



}
