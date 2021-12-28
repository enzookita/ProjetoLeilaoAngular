import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Veterinario } from '../model/veterinario';
import { VeterinarioService } from '../services/veterinario.service';

@Component({
  selector: 'app-veterinarioincluir',
  templateUrl: './veterinarioincluir.component.html',
  styleUrls: ['./veterinarioincluir.component.css']
})
export class VeterinarioincluirComponent implements OnInit {

  veterinario: Veterinario = {id: 0, nome: '', email: '',  telefone: '',  ativo: false}

  constructor(private veterinarioService: VeterinarioService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.veterinarioService.incluir( this.veterinario).subscribe(
      dados => { alert("veterinario cadastrado com sucesso"),
                 this.router.navigateByUrl("veterinario")
                },
      error => console.log(error)
    )
  }

}
