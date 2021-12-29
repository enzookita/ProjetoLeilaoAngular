import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lance } from '../model/lance';
import { LanceService } from '../services/lance.service';

@Component({
  selector: 'app-lancealterar',
  templateUrl: './lancealterar.component.html',
  styleUrls: ['./lancealterar.component.css']
})
export class LancealterarComponent implements OnInit {

  lance: Lance = {id: 0, data: new Date , valor: 0, ativo: false, idComprador: 0, idLeilao: 0, idAnimal: 0}

  constructor( private lanceServico: LanceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.lanceServico.buscar( id + "" ).subscribe(
      dados => this.lance = dados
    )
  }

  alterar( frm: NgForm){

    this.lanceServico.alterar(this.lance).subscribe(

      dados =>  { alert("Registro alterado"),  
          this.router.navigateByUrl("lance")}

    )

    

  }

}
