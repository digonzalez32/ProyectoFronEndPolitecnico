import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export  class ApiPokemonService {

  constructor(private http: HttpClient) {

   }

  getPokemonList() {
    return  this.http.get('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0'); 
  }


  getPokemonById(url) {
    return  this.http.get(url); 
  }
}
