import Action from 'types/action'
import { Home, } from 'types/state'
import fetchPokemonsReducer from './fetchPokemons/reducer'

export default (
  { fetchPokemons, }: Home, action: Action
): object => ({
  fetchPokemons: fetchPokemonsReducer(
    fetchPokemons, action
  ),
})
