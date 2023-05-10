import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url:string = 'https://restcountries.com/v3.1/all';
  
  constructor(private http:HttpClient) { }

  getPaises(): Observable<any>{

    return this.http.get(this.url);
  }

}
