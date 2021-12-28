import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comprador } from '../model/comprador';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {

  constructor( private http: HttpClient) { }
  
  listarComprador(): Observable<any>{
    return this.http.get<Comprador>("http://localhost:8080/comprador");
  }

  buscar( id: string  ): Observable<Comprador>{
    return this.http.get<Comprador>("http://localhost:8080/comprador/" + id);
  }

  incluir(comprador: Comprador): Observable<Comprador>{
    return this.http.post<Comprador>("http://localhost:8080/comprador", comprador);
  }
  
  alterar(comprador: Comprador): Observable<Comprador>{
    return this.http.put<Comprador>("http://localhost:8080/comprador", comprador);
  }


}
