import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leilao } from '../model/leilao';
import { Mensagem } from '../model/mensagem';

@Injectable({
  providedIn: 'root'
})
export class LeilaoService {
  constructor( private http: HttpClient) { }
  
  listarLeilao(): Observable<any>{
    return this.http.get<Leilao>("http://localhost:8080/leilao");
}
incluir(leilao: Leilao): Observable<Mensagem>{
  return this.http.post<Mensagem>("http://localhost:8080/leilao", leilao);
}

alterar(leilao: Leilao): Observable<Leilao>{
  return this.http.put<Leilao>("http://localhost:8080/leilao", leilao);
}

buscar( id: string  ): Observable<Leilao>{
  return this.http.get<Leilao>("http://localhost:8080/leilao/" + id);
}

}