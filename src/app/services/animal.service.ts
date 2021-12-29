import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor( private http: HttpClient) { }
  
  listaAnimal(): Observable<any>{

    return this.http.get<Animal>("http://localhost:8080/animal");

  }

  buscar( id: string  ): Observable<Animal>{
    return this.http.get<Animal>("http://localhost:8080/animal/" + id);
  }

  incluir(animal: Animal): Observable<Animal>{
    return this.http.post<Animal>("http://localhost:8080/animal", animal);
  }
  
  alterar(animal: Animal): Observable<Animal>{
    return this.http.put<Animal>("http://localhost:8080/animal", animal);
  }
}
