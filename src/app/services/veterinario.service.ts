import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinario } from '../model/veterinario';

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

  incluir(veterinario: Veterinario): Observable<Veterinario>{
    return this.http.post<Veterinario>("http://localhost:8080/veterinario", veterinario);
  }
  
  alterar(veterinario: Veterinario): Observable<Veterinario>{
    return this.http.put<Veterinario>("http://localhost:8080/veterinario", veterinario);
  }
}
