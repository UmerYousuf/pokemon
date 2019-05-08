import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service';
import { PokemonDetail } from '../pokemon-detail/pokemon-detail';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private pokemonList: any[] = [];
  private searchQuery: string = '';

  items : FirebaseListObservable<any[]>;
  favoriteItem: FirebaseListObservable<any[]>
  title = 'Pakemon Fvr8 List';
  newItem: string = ''; 

  constructor(
    private navCtrl: NavController,
    private pokedexService: PokedexService
  ) {}

  ngOnInit(){
    this.pokedexService.getAllPokemon()
      .subscribe(data => {
        this.pokemonList = data;
        this.pokedexService.initData();
    });
  }

  getPokemons(){
    var q = this.searchQuery;
    if (q.trim() == '') {
        return this.pokemonList;
    }
    return this.pokemonList.filter((v) => {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
            return true;
        }
        return false;
    });
  }

  goToPokemonDetail(event){
    this.navCtrl.push(PokemonDetail, {
      pokemon: event.pokemon
    });
  }

ngOnInit() {
    this.favoriteItem = this.af.database.list('/favoriteItem'); 
    this.items = this.af.database.list('/items');
  }
  add() {
    this.items.push(this.newItem); 
    this.newItem = ''; 
  }
  delete(item) {
    this.items.remove(item);
  }
 
  favorite(item) { 
    this.favoriteItem.push(item); 
  }

}