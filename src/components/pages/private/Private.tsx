import React, { ReactElement, useEffect, } from 'react'
import fetchRickAndMortyData from 'state/modules/private/fetchRickAndMortyData/action'
import Services from 'organisms/Services'
import { useGlobalState, } from 'state/StoreProvider'

const ID = 'Services Section'
const serviceTitle = 'private.txt1'
const serviceSubtitle = 'private.txt2'

const Private: React.SFC = (): ReactElement => {
  const [ state, dispatch, ] = useGlobalState()

  useEffect(
    (): void => {
      if (!state.priv.fetchRickAndMortyData.rickyAndMortyData.length) {
        fetchRickAndMortyData(
          dispatch
        )
      }
    }, []
  )

  const data = state.priv.fetchRickAndMortyData.rickyAndMortyData

  return (
    <div id={ID}>
      <Services title={serviceTitle} subtitle={serviceSubtitle} services={data} />
    </div>
  )
}

export default Private
