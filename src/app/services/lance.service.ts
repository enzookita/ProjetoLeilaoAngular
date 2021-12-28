import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comprador } from '../model/comprador';
import { Lance } from '../model/lance';

@Injectable({
  providedIn: 'root'
})
export class LanceService {
  

  constructor( private http: HttpClient) { }

  lancelistar(): Observable<any>{

    return this.http.get<Lance>("http://localhost:8080/lance");

  }
  
  buscar( id: string  ): Observable<Lance>{
    return this.http.get<Lance>("http://localhost:8080/lance/" + id);
  }

  incluir(lance: Lance): Observable<Lance>{
    return this.http.post<Lance>("http://localhost:8080/lance", lance);
  }
  
  alterar(lance: Lance): Observable<Lance>{
    return this.http.put<Lance>("http://localhost:8080/lance", lance);
  }
}
