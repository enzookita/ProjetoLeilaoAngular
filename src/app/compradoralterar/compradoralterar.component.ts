import { NgForm } from '@angular/forms';
import { CompradorService } from './../services/comprador.service';
import { Comprador } from './../model/comprador';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compradoralterar',
  templateUrl: './compradoralterar.component.html',
  styleUrls: ['./compradoralterar.component.css']
})
export class CompradoralterarComponent implements OnInit {

  comprador: Comprador = { id: 0, nome: '', email: '', telefone: '', ativo: false }

  constructor(private compradorServico: CompradorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.compradorServico.buscar(id + "").subscribe(
      dados => this.comprador = dados
    )
  }

  alterar(frm: NgForm) {

    this.compradorServico.alterar(this.comprador).subscribe(

      dados => {
        alert("Registro alterado"),
        this.router.navigateByUrl("comprador")
      }

    )



  }
}
