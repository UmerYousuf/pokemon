import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'pokemonAvatar'
})
@Injectable()
export class PokemonAvatar {

  private imgBaseUrl: string = 'https://pokeapi.co/api/v2';

  transform(value: string, args: any[]) {
    return this.imgBaseUrl + value + '.png';
  }
}
