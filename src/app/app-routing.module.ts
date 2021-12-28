import { CompradoralterarComponent } from './compradoralterar/compradoralterar.component';
import { CompradorincluirComponent } from './compradorincluir/compradorincluir.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { VendedorComponent } from './vendedorlistar/vendedor.component';
import { LeilaolistarComponent } from './leilaolistar/leilaolistar.component';
import { LancelistarComponent } from './lancelistar/lancelistar.component';


const routes: Routes = [
  {path: "comprador", component:CompradorlistarComponent},
  {path: "animal", component: AnimallistarComponent},
  {path: "veterinario", component: VeterinariolistarComponent},
  {path: "vendedor", component: VendedorComponent},
  {path: "leilao", component: LeilaolistarComponent},
  {path: "lance", component: LancelistarComponent},
  {path: "compradorincluir", component: CompradorincluirComponent},
  { path: 'compradoralterar/:id', component: CompradoralterarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
