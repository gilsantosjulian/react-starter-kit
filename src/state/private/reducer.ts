import fetchRickAndMortyDataReducer from './fetchRickAndMortyData/reducer'

export default (
  { fetchRickAndMortyData, }, action
): object => ({
  fetchRickAndMortyData: fetchRickAndMortyDataReducer(
    fetchRickAndMortyData, action
  ),
})
