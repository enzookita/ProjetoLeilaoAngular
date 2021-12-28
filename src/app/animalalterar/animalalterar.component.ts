import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../model/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animalalterar',
  templateUrl: './animalalterar.component.html',
  styleUrls: ['./animalalterar.component.css']
})
export class AnimalalterarComponent implements OnInit {

  animal : Animal = {id: 0, nome: '', registro: '', preco: 0 , raca: '', ativo: false,idVendedor: 0, idVeterinario: 0 }

  constructor(private animalServico: AnimalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    this.animalServico.buscar( id + "" ).subscribe(
      dados => this.animal = dados)
  }

  alterar( frm: NgForm){

    this.animalServico.alterar(this.animal).subscribe(

      dados =>  { alert("Registro alterado"),  
          this.router.navigateByUrl("animal")}

    )

    

  }


}
