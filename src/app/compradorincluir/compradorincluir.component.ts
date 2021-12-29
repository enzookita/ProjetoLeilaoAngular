import { Comprador } from './../model/comprador';
import { CompradorService } from './../services/comprador.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Mensagem } from '../model/mensagem';

@Component({
  selector: 'app-compradorincluir',
  templateUrl: './compradorincluir.component.html',
  styleUrls: ['./compradorincluir.component.css']
})
export class CompradorincluirComponent implements OnInit {

  mensagem: Mensagem = {mensagem:"", erro: [] }
  comprador: Comprador = {id: 0,nome: '', email: '',  telefone: '',  ativo: false}

  constructor(private compradorService: CompradorService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.compradorService.incluir( this.comprador).subscribe(
      dados => { this.mensagem = dados
                 alert( this.mensagem.mensagem )
                 if (this.mensagem.erro.length == 0){
                     this.router.navigateByUrl("comprador");
                 } else {
                  this.mensagem.erro.forEach(function (value) {
                    alert(value);
                  }); 
                 }
                }
    )
  }

}
