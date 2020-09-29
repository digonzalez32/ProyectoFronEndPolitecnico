import { Component, OnInit } from '@angular/core';
import {ApiPokemonService} from '../api-pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  listPokemon : any[] = [];
  count;

  constructor(private apiPokemonService: ApiPokemonService) { 


    this.apiPokemonService.getPokemonList().subscribe(
      (data) => {
        this.listPokemon = data['results'];
        this.count = data['count'];
        for (var poke of this.listPokemon) {

          console.warn(poke.url);
        }
      },
      (error) => {
        console.error(error);
      }
    );


  
  }

  ngOnInit() {
  }

}
