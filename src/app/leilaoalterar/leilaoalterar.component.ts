import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Leilao } from '../model/leilao';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-leilaoalterar',
  templateUrl: './leilaoalterar.component.html',
  styleUrls: ['./leilaoalterar.component.css']
})
export class LeilaoalterarComponent implements OnInit {

  leilao: Leilao = {id: 0, data: new Date , nome: '',  ativo: false}

  constructor(private leilaoServico: LeilaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.leilaoServico.buscar( id + "" ).subscribe(
      dados => this.leilao = dados
    )
  }

  alterar( frm: NgForm){

    this.leilaoServico.alterar(this.leilao).subscribe(

      dados =>  { alert("Registro alterado"),  
          this.router.navigateByUrl("leilao")}

    )

}

}
