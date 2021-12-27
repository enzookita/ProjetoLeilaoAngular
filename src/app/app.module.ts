import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompradorlistarComponent } from './compradorlistar/compradorlistar.component';
import { AnimallistarComponent } from './animallistar/animallistar.component';
import { VeterinariolistarComponent } from './veterinariolistar/veterinariolistar.component';

@NgModule({
  declarations: [
    AppComponent,
    CompradorlistarComponent,
    AnimallistarComponent,
    VeterinariolistarComponent
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
