import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendedor } from '../model/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedoralterar',
  templateUrl: './vendedoralterar.component.html',
  styleUrls: ['./vendedoralterar.component.css']
})
export class VendedoralterarComponent implements OnInit {
  vendedor: Vendedor = { id: 0, nome: '', email: '', telefone: '', ativo: false }
  constructor(private vendedorServico: VendedorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.vendedorServico.buscar(id + "").subscribe(
      dados => this.vendedor = dados
    )
  }

  alterar(frm: NgForm) {
    this.vendedorServico.alterar(this.vendedor).subscribe(
      dados => {
        alert("Alterado com sucesso"),
          this.router.navigateByUrl("vendedor")
      }
    )
  }

}
