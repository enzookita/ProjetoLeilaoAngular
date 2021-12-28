import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Lance } from '../model/lance';
import { LanceService } from '../services/lance.service';

@Component({
  selector: 'app-lanceincluir',
  templateUrl: './lanceincluir.component.html',
  styleUrls: ['./lanceincluir.component.css']
})
export class LanceincluirComponent implements OnInit {

  lance: Lance = {id: 0, data:{} , valor: 0, ativo: false, idComprador: 0, idLeilao: 0, idAnimal: 0}
  
  constructor(private lanceService: LanceService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.lanceService.incluir( this.lance).subscribe(
      dados => { alert("Comprador cadastrado com sucesso"),
                 this.router.navigateByUrl("comprador")
                },
      error => console.log(error)
    )
  }

}
