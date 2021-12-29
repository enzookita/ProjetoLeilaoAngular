import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Animal } from '../model/animal';
import { Mensagem } from '../model/mensagem';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animalincluir',
  templateUrl: './animalincluir.component.html',
  styleUrls: ['./animalincluir.component.css']
})
export class AnimalincluirComponent implements OnInit {

    mensagem: Mensagem = { mensagem: "", erro: []}
    animal : Animal = {id: 0, nome: '', registro: '', preco: 0 , raca: '', ativo: false,idVendedor: 0, idVeterinario: 0 }

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.animalService.incluir( this.animal).subscribe(
      dados => { this.mensagem = dados
                 alert( this.mensagem.mensagem )
                 if (this.mensagem.erro.length == 0){
                     this.router.navigateByUrl("animal");
                 } else {
                  this.mensagem.erro.forEach(function (value) {
                    alert(value);
                  }); 
                 }
                }
    )
  }

}
