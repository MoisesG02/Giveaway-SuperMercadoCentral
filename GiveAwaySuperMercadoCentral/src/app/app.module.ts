import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SorteoPremiosComponent } from './sorteo-premios/sorteo-premios.component';
import { RifaComponent } from './rifa/rifa.component';
import { FormsModule } from '@angular/forms';
import { MantPremiosComponent } from './mant-premios/mant-premios.component';

@NgModule({
  declarations: [
    AppComponent,
    SorteoPremiosComponent,
    RifaComponent,
    MantPremiosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
