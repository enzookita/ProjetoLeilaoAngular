import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from '../model/veterinario';
import { VeterinarioService } from '../services/veterinario.service';

@Component({
  selector: 'app-veterinarioalterar',
  templateUrl: './veterinarioalterar.component.html',
  styleUrls: ['./veterinarioalterar.component.css']
})
export class VeterinarioalterarComponent implements OnInit {

  veterinario: Veterinario = {id: 0,nome: '', email: '',  telefone: '',  ativo: false}

  constructor( private veterinarioService: VeterinarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.veterinarioService.buscar( id + "" ).subscribe(
      dados => this.veterinario = dados
    )
  }

  alterar( frm: NgForm){

    this.veterinarioService.alterar(this.veterinario).subscribe(

      dados =>  { alert("Registro alterado"),  
          this.router.navigateByUrl("veterinario")}

    )

  }
}
