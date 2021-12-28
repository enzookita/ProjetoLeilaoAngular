import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Leilao } from '../model/leilao';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-leilaoincluir',
  templateUrl: './leilaoincluir.component.html',
  styleUrls: ['./leilaoincluir.component.css']
})
export class LeilaoincluirComponent implements OnInit {

  leilao: Leilao = {id: 0, data: new Date , nome: '',  ativo: false}
  
  constructor(private leilaoService: LeilaoService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.leilaoService.incluir( this.leilao).subscribe(
      dados => { alert("Leilão cadastrado com sucesso"),
                 this.router.navigateByUrl("leilao")
                },
      error => console.log(error)
    )
  }

}
