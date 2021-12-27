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
}
