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
import { LanceincluirComponent } from './lanceincluir/lanceincluir.component';
import { LancealterarComponent } from './lancealterar/lancealterar.component';
import { LeilaoincluirComponent } from './leilaoincluir/leilaoincluir.component';
import { VendedorincluirComponent } from './vendedorincluir/vendedorincluir.component';
import { VeterinarioincluirComponent } from './veterinarioincluir/veterinarioincluir.component';
import { VendedoralterarComponent } from './vendedoralterar/vendedoralterar.component';
import { VeterinarioalterarComponent } from './veterinarioalterar/veterinarioalterar.component';
import { AnimalalterarComponent } from './animalalterar/animalalterar.component';
import { AnimalincluirComponent } from './animalincluir/animalincluir.component';
import { LeilaoalterarComponent } from './leilaoalterar/leilaoalterar.component';



@NgModule({
  declarations: [
    AppComponent,
    CompradorlistarComponent,
    AnimallistarComponent,
    VeterinariolistarComponent,
    LeilaolistarComponent,
    LancelistarComponent,
    CompradorincluirComponent,
    CompradoralterarComponent,
    LanceincluirComponent,
    LancealterarComponent,
    LeilaoincluirComponent,
    VendedorincluirComponent,
    VeterinarioincluirComponent,
    VendedoralterarComponent,
    VeterinarioalterarComponent,
    AnimalalterarComponent,
    AnimalincluirComponent,
    LeilaoalterarComponent,
    VendedorComponent

    
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
