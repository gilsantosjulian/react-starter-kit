import React, { ReactElement, useEffect, } from 'react'
import fetchRickAndMortyData from 'state/private/fetchRickAndMortyData/action'
import Services from 'organisms/Services'
import { useGlobalState, } from 'state/StoreProvider'

const ID = 'Services Section'
const serviceTitle = 'What we do'
const serviceSubtitle = `
      Having and managing a correct marketing strategy 
      is crucial in a fast moving market.`

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
