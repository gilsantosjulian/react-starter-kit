import Action from 'types/action'
import { Priv, } from 'types/state'
import fetchRickAndMortyDataReducer from './fetchRickAndMortyData/reducer'

export default (
  { fetchRickAndMortyData, }: Priv, action: Action
): object => ({
  fetchRickAndMortyData: fetchRickAndMortyDataReducer(
    fetchRickAndMortyData, action
  ),
})
