import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';

const routes: Routes = [
  {path: "comprador", component:CompradorlistarComponent},
  {path: "animal", component: AnimallistarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
