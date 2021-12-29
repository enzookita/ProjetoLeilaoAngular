import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinario } from '../model/veterinario';
import { Mensagem } from '../model/mensagem';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor( private http: HttpClient) { }
  
  listarVeterinario(): Observable<any>{

    return this.http.get<Veterinario>("http://localhost:8080/veterinario");

  }

  buscar( id: string  ): Observable<Veterinario>{
    return this.http.get<Veterinario>("http://localhost:8080/veterinario/" + id);
  }

  incluir(veterinario: Veterinario): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/veterinario", veterinario);
  }
  
  alterar(veterinario: Veterinario): Observable<Mensagem>{
    return this.http.put<Mensagem>("http://localhost:8080/veterinario", veterinario);
  }
}
