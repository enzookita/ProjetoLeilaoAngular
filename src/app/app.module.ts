import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
import { VendedorComponent } from './vendedorlistar/vendedor.component';
import { LeilaolistarComponent } from './leilaolistar/leilaolistar.component';
import { LancelistarComponent } from './lancelistar/lancelistar.component';
import { CompradorincluirComponent } from './compradorincluir/compradorincluir.component';
import { FormsModule } from '@angular/forms';
import { CompradoralterarComponent } from './compradoralterar/compradoralterar.component';
<<<<<<< HEAD
import { LanceincluirComponent } from './lanceincluir/lanceincluir.component';
import { LancealterarComponent } from './lancealterar/lancealterar.component';
=======
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { VendedorincluirComponent } from './vendedorincluir/vendedorincluir.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
<<<<<<< HEAD
import { LeilaoalterarComponent } from './leilaoalterar/leilaoalterar.component';
=======
import { VendedoralterarComponent } from './vendedoralterar/vendedoralterar.component';
import { VeterinarioalterarComponent } from './veterinarioalterar/veterinarioalterar.component';
>>>>>>> 4264f56192673ca57459eec57b7da399754004f2

>>>>>>> d98f09f70961dcc40f5d092421b4ffb654add3a5

@NgModule({
  declarations: [
    AppComponent,
    CompradorlistarComponent,
    AnimallistarComponent,
    VeterinariolistarComponent,
    VendedorComponent,
    LeilaolistarComponent,
    LancelistarComponent,
    CompradorincluirComponent,
    CompradoralterarComponent,
<<<<<<< HEAD
    LanceincluirComponent,
    LancealterarComponent
=======
    LeilaoincluirComponent,
<<<<<<< HEAD
    VendedorincluirComponent,
    VeterinarioincluirComponent,
    LeilaoalterarComponent

=======
    VendedorincluirComponent,
    VeterinarioincluirComponent,
    VendedoralterarComponent,
    VeterinarioincluirComponent,
    VeterinarioalterarComponent,
    LeilaoincluirComponent,
    VendedorincluirComponent,
    VeterinarioincluirComponent
>>>>>>> 4264f56192673ca57459eec57b7da399754004f2
>>>>>>> d98f09f70961dcc40f5d092421b4ffb654add3a5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
