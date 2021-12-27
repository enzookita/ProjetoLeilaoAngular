import { Component, OnInit } from '@angular/core';
import { Comprador } from '../model/comprador';
import { CompradorService } from '../services/comprador.service';

@Component({
  selector: 'app-compradorlistar',
  templateUrl: './compradorlistar.component.html',
  styleUrls: ['./compradorlistar.component.css']
})
export class CompradorlistarComponent implements OnInit {

  compradores: Comprador[] = [];

  constructor(private servicoComprador: CompradorService) { }

  ngOnInit(): void {

    this.servicoComprador.listarComprador().subscribe(
      data => {this.compradores = data}
      
    )
  }

}