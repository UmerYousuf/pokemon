import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service';

@Component({
  templateUrl: 'pokemon-detail.html'
})
export class PokemonDetail implements OnInit {

  private pokemon: any = {};

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private pokedexService: PokedexService
  ) {  }

  ngOnInit() {
    this.pokemon = this.navParams.data.pokemon;
  }

  getId(){
    return this.pokemon.id;
  }

  goToPreviousPokemon(){
    if (this.getId() >= 2){
      let newId = this.getId() - 1;
     
      this.changePokemonData(newId);
    }
  }

  goToNextPokemon(){
    if (this.getId() < 151){
      let newId = this.getId() + 1;

      this.changePokemonData(newId);
    }
  }

  private changePokemonData(id: number){
    this.pokedexService.getPokemon(id)
      .subscribe(data => this.pokemon = data);
  }

}
