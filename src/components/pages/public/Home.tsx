import React, { ReactElement, useEffect, } from 'react';

import { textGreen, } from 'publicViewsStyles/home.scss';
import { useGlobalState, } from 'state/StoreProvider';
import fetchPokemons from 'state/home/fetchPokemons/action';

const Home: React.SFC = (): ReactElement => {
  const [ state, dispatch, ] = useGlobalState();

  useEffect(
    (): void => {
      if (!state.home.fetchPokemons.pokemons.length) {
        fetchPokemons(
          dispatch
        );
      }
    }, []
  );

  return (
    <div className={textGreen}>
      <ul>
        {state.home.fetchPokemons.pokemons.map(
          (
            pokemon
          ): ReactElement => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Home;
