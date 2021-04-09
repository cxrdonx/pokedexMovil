import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeComponent } from './poke/poke.component';
import { SeekerComponent } from './seeker/seeker.component';  
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PokeComponent,
    SeekerComponent,
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
