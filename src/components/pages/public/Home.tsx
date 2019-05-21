import React, { ReactElement, useEffect, } from 'react';

import * as styles from 'publicViewsStyles/home.scss';
import { useGlobalState, } from 'state/StoreProvider';
import fetchPokemons from 'state/home/fetchPokemons/action';
import RowResponsive from 'templates/RowResponsive';
import CenteredParagraph from 'organisms/CenteredParagraph';
import VerticalCarousel from 'organisms/VerticalCarousel';

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
    <div className={styles.container}>
      <RowResponsive
        left={<CenteredParagraph title="home.txt1" description="home.txt2" />}
        right={<CenteredParagraph title="home.txt3" description="home.txt4" />}
      >
        <VerticalCarousel
          data={state.home.fetchPokemons.pokemons}
          imageKey="image"
          labelKey="name"
        />
      </RowResponsive>
    </div>
  );
};

export default Home;
