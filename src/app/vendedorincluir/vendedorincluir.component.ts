import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendedor } from '../model/vendedor';
import { VendedorService } from '../services/vendedor.service';
import { Mensagem } from '../model/mensagem';

@Component({
  selector: 'app-vendedorincluir',
  templateUrl: './vendedorincluir.component.html',
  styleUrls: ['./vendedorincluir.component.css']
})
export class VendedorincluirComponent implements OnInit {

  mensagem: Mensagem = { mensagem: "", erro: [] }
  vendedor: Vendedor = { id: 0, nome: '', email: '', telefone: '', ativo: false }
  constructor(private vendedorService: VendedorService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir(frm: NgForm) {
    this.vendedorService.incluir(this.vendedor).subscribe(
      dados => {
        this.mensagem = dados
        alert(this.mensagem.mensagem)
        if (this.mensagem.erro.length == 0) {
          this.router.navigateByUrl("vendedor");
        } else {
          this.mensagem.erro.forEach(function (value) {
            alert(value);
          });
        }
      }
    )
  }

}
