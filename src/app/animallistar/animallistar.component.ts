import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animallistar',
  templateUrl: './animallistar.component.html',
  styleUrls: ['./animallistar.component.css']
})
export class AnimallistarComponent implements OnInit {

  animales: Animal[] = [];

  constructor(private servicoAnimal: AnimalService) { }

  ngOnInit(): void {

    this.servicoAnimal.listarComprador().subscribe(
      data => {this.animales = data}
      
    )
  }

}
