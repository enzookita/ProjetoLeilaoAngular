import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
<<<<<<< HEAD
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
=======
import { VendedorComponent } from './vendedorlistar/vendedor.component';
>>>>>>> d24236e2f93aa23f62dfe496b9e7f294b0b2b090

const routes: Routes = [
  {path: "comprador", component:CompradorlistarComponent},
  {path: "animal", component: AnimallistarComponent},
<<<<<<< HEAD
  {path: "veterinario", component: VeterinariolistarComponent}
=======
  {path: "vendedor", component: VendedorComponent}
>>>>>>> d24236e2f93aa23f62dfe496b9e7f294b0b2b090
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
