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
}
