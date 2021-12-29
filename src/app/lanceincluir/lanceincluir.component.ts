import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Lance } from '../model/lance';
import { Mensagem } from '../model/mensagem';
import { LanceService } from '../services/lance.service';

@Component({
  selector: 'app-lanceincluir',
  templateUrl: './lanceincluir.component.html',
  styleUrls: ['./lanceincluir.component.css']
})
export class LanceincluirComponent implements OnInit {

  mensagem: Mensagem = {mensagem:"", erro: [] }

  lance: Lance = {id: 0, data:new Date , valor: 0, ativo: false, idComprador: 0, idLeilao: 0, idAnimal: 0}
  
  constructor(private lanceService: LanceService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.lanceService.incluir( this.lance).subscribe(
      dados => { this.mensagem = dados
                 alert( this.mensagem.mensagem )
                 if (this.mensagem.erro.length == 0){
                     this.router.navigateByUrl("lance");
                 } else {
                  this.mensagem.erro.forEach(function (value) {
                    alert(value);
                  }); 
                 }
                }
    )
  }

}
