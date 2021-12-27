import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendedor } from '../model/vendedor';


@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }

  listarVendedor(): Observable<any>{

    return this.http.get<Vendedor>("http://localhost:8080/vendedor");

  }
}
