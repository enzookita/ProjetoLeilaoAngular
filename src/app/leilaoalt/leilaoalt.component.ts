import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leilaoalt',
  templateUrl: './leilaoalt.component.html',
  styleUrls: ['./leilaoalt.component.css']
})
export class LeilaoaltComponent implements OnInit {

  constructor( private rota: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.rota.snapshot.paramMap.get('id');
    alert(id);
  
  }

}
