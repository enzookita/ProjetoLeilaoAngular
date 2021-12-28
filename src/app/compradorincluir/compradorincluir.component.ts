import { Comprador } from './../model/comprador';
import { CompradorService } from './../services/comprador.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compradorincluir',
  templateUrl: './compradorincluir.component.html',
  styleUrls: ['./compradorincluir.component.css']
})
export class CompradorincluirComponent implements OnInit {


  comprador: Comprador = {id: 0,nome: '', email: '',  telefone: '',  ativo: false}

  constructor(private compradorService: CompradorService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.compradorService.incluir( this.comprador).subscribe(
      dados => { alert("Comprador cadastrado com sucesso"),
                 this.router.navigateByUrl("comprador")
                },
      error => console.log(error)
    )
  }

}
