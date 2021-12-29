import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { Mensagem } from '../model/mensagem';

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

  incluir(animal: Animal): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/animal", animal);
  }
  
  alterar(animal: Animal): Observable<Mensagem>{
    return this.http.put<Mensagem>("http://localhost:8080/animal", animal);
  }
}
