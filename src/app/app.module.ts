import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApiPokemonService } from './api-pokemon.service'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '**', component: PokemonListComponent }
    ])
  ],
  providers: [ApiPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
