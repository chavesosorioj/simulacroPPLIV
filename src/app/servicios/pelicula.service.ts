import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
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





}
