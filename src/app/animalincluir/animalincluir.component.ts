import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Animal } from '../model/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animalincluir',
  templateUrl: './animalincluir.component.html',
  styleUrls: ['./animalincluir.component.css']
})
export class AnimalincluirComponent implements OnInit {

    animal : Animal = {id: 0, nome: '', registro: '', preco: 0 , raca: '', ativo: false,idVendedor: 0, idVeterinario: 0 }

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){
    this.animalService.incluir( this.animal).subscribe(
      dados => { alert("Animal cadastrado com sucesso"),
                 this.router.navigateByUrl("animal")
                },
      error => console.log(error)
    )
  }

}
