import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { VendedorComponent } from './vendedorlistar/vendedor.component';
import { LeilaolistarComponent } from './leilaolistar/leilaolistar.component';


const routes: Routes = [
  {path: "comprador", component:CompradorlistarComponent},
  {path: "animal", component: AnimallistarComponent},
  {path: "veterinario", component: VeterinariolistarComponent},
  {path: "vendedor", component: VendedorComponent},
  {path: "leilao", component: LeilaolistarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
