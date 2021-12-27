import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { AnimallistarComponent } from './animallistar/animallistar.component';
<<<<<<< HEAD
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';
=======
import { VendedorComponent } from './vendedorlistar/vendedor.component';
>>>>>>> d24236e2f93aa23f62dfe496b9e7f294b0b2b090

@NgModule({
  declarations: [
    AppComponent,
    CompradorlistarComponent,
    AnimallistarComponent,
<<<<<<< HEAD
    VeterinariolistarComponent
=======
    VendedorComponent
>>>>>>> d24236e2f93aa23f62dfe496b9e7f294b0b2b090
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
