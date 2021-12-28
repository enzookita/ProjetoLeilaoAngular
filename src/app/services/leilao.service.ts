import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leilao } from '../model/leilao';

@Injectable({
  providedIn: 'root'
})
export class LeilaoService {
  constructor( private http: HttpClient) { }
  
  listarLeilao(): Observable<any>{
    return this.http.get<Leilao>("http://localhost:8080/leilao");
}
incluir(leilao: Leilao): Observable<Leilao>{
  return this.http.post<Leilao>("http://localhost:8080/leilao", leilao);
}


}