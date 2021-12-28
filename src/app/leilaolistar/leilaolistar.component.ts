import { Component, OnInit } from '@angular/core';
import { Leilao } from '../model/leilao';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-leilaolistar',
  templateUrl: './leilaolistar.component.html',
  styleUrls: ['./leilaolistar.component.css']
})
export class LeilaolistarComponent implements OnInit {
  leilaos: Leilao[] = [];

  constructor(private servicoLeilao: LeilaoService) { }

  ngOnInit(): void {

    this.servicoLeilao.listarLeilao().subscribe(
      data => {this.leilaos = data}

    )
  }
}
