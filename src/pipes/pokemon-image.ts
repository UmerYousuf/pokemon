import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'pokemonImage'
})
@Injectable()
export class PokemonImage {

  private imgBaseUrl: string = 'https://pokeapi.co/api/v2';

  transform(value: string, args: any[]) {
    return this.imgBaseUrl + value + '.png';
  }
}
