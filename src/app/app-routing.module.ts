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
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
import { VeterinarioalterarComponent } from './veterinarioalterar/veterinarioalterar.component';
import { VendedorincluirComponent } from './vendedorincluir/vendedorincluir.component';
import { AnimalalterarComponent } from './animalalterar/animalalterar.component';
import { VendedoralterarComponent } from './vendedoralterar/vendedoralterar.component';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { LeilaoalterarComponent } from './leilaoalterar/leilaoalterar.component';
import { LanceincluirComponent } from './lanceincluir/lanceincluir.component';
import { LancealterarComponent } from './lancealterar/lancealterar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component';


const routes: Routes = [
  
  {path: "animal", component: AnimallistarComponent},
  {path: "animalalterar/:id", component: AnimalalterarComponent},
  {path: "animalincluir", component: AnimalincluirComponent},


  {path: "veterinario", component: VeterinariolistarComponent},
  {path: "veterinarioincluir", component: VeterinarioincluirComponent},
  {path: "veterinarioalterar/:id", component: VeterinarioalterarComponent},

  {path: "vendedor", component: VendedorComponent},
  {path: "vendedorincluir", component: VendedorincluirComponent},
  {path: "vendedoralterar/:id", component: VendedoralterarComponent},

  {path: "leilao", component: LeilaolistarComponent},
  {path: "leilaoincluir", component: LeilaoincluirComponent},
  {path: "leilaoalterar/:id", component: LeilaoalterarComponent},
  
  {path: "lance", component: LancelistarComponent},
  {path: "lanceincluir", component: LanceincluirComponent},
  {path: "lancealterar/:id", component: LancealterarComponent},

  {path: "comprador", component:CompradorlistarComponent},
  {path: "compradorincluir", component: CompradorincluirComponent},
  {path: 'compradoralterar/:id', component: CompradoralterarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
