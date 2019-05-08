import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail';
import { PokemonlistComponent } from './pokemonlist/pokemonlist';
@NgModule({
	declarations: [LoaderComponent,
    PokemonDetailComponent,
    PokemonlistComponent],
	imports: [],
	exports: [LoaderComponent,
    PokemonDetailComponent,
    PokemonlistComponent]
})
export class ComponentsModule {}
