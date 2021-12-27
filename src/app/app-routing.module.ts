import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';

const routes: Routes = [
  {path: "comprador", component:CompradorlistarComponent},
  {path: "animal", component: AnimallistarComponent},
  {path: "veterinario", component: VeterinariolistarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
