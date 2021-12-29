import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Leilao } from '../model/leilao';
import { Mensagem } from '../model/mensagem';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-leilaoincluir',
  templateUrl: './leilaoincluir.component.html',
  styleUrls: ['./leilaoincluir.component.css']
})
export class LeilaoincluirComponent implements OnInit {

  mensagem: Mensagem ={mensagem:"",erro: [] }
  leilao: Leilao = {id: 0, data: new Date , nome: '',  ativo: false}
  
  constructor(private leilaoService: LeilaoService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.leilaoService.incluir( this.leilao).subscribe(
      dados => {this.mensagem = dados
                  alert(this.mensagem.mensagem)
                  if(this.mensagem.erro.length == 0){
                      this.router.navigateByUrl("leilao");
                  }else{
                    this.mensagem.erro.forEach(function(value){
                      alert(value);
                    });
                  }
                }
    )
  }

}
