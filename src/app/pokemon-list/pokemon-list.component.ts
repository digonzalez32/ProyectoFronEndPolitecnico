import { Component, OnInit, Input } from '@angular/core';
import {ApiPokemonService} from '../api-pokemon.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() url: string = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";
  listPokemon : any[] = [];
  count;
  nextUrl;

  constructor(private apiPokemonService: ApiPokemonService, private route: ActivatedRoute) {
    this.apiPokemonService.getPokemonService(this.url).subscribe(
      (data) => {
        this.listPokemon = data['results'];
        this.count = data['count'];
        let oldNextUrl = data['next'];
        this.nextUrl = oldNextUrl.replace(/\:/g,'_v_').replace(/\//g,'_z_').replace(/\?/g,'_x_').replace(/\=/g,'_t_').replace(/\&/g,'_t_');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
    
  }

}
