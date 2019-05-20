import fetchPokemonsReducer from './fetchPokemons/reducer';

export default (
  { fetchPokemons, }, action
): object => ({
  fetchPokemons: fetchPokemonsReducer(
    fetchPokemons, action
  ),
});
