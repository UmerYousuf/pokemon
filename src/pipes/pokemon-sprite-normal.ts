import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'pokemonSprite'
})
@Injectable()
export class PokemonSpriteNormal {

  transform(value, args) {
    value = value.replace('https://pokeapi.co/api/v2',
      'assets/images/');
    return value;
  }
}
