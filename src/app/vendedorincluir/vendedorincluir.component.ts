import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendedor } from '../model/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedorincluir',
  templateUrl: './vendedorincluir.component.html',
  styleUrls: ['./vendedorincluir.component.css']
})
export class VendedorincluirComponent implements OnInit {

  vendedor: Vendedor = {id: 0,nome: '', email: '',  telefone: '',  ativo: false}
  constructor(private vendedorService: VendedorService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir (frm: NgForm) {
    this.vendedorService.incluir(this.vendedor).subscribe(
      dados => {alert("Vendedor cadastrado com sucesso"),
                this.router.navigateByUrl("vendedor")},
      error => console.log(error)
    )
  }

}
