import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaneService } from './dane.service';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { PogodaComponent } from './pogoda/pogoda.component';
import { FormularzComponent } from './formularz/formularz.component';
import { NawigacjaComponent } from './nawigacja/nawigacja.component';

@NgModule({
  declarations: [
    AppComponent,
    NaglowekComponent,
    PogodaComponent,
    FormularzComponent,
    NawigacjaComponent
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
