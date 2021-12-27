import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comprador } from '../model/comprador';

@Injectable({
  providedIn: 'root'
})
export class LanceService {

  constructor( private http: HttpClient) { }

  listarComprador(): Observable<any>{

    return this.http.get<Comprador>("http://localhost:8080/lance");

  }
}
