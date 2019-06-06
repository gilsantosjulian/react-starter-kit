import { Status, } from 'types/draft'

export interface FetchPokemons {
  pokemons: [];
  status: Status;
}

export interface Home {
  fetchPokemons: FetchPokemons;
}

export interface Spinner {
  visibility: boolean;
}

export interface Ui {
  spinner: Spinner;
}

export default interface State {
  home: Home;
  ui: Ui;
}
