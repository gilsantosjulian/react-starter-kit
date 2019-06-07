import React, { ReactElement, useEffect, } from 'react'
import fetchRickAndMortyData from 'state/private/fetchRickAndMortyData/action'
import Services from 'organisms/Services'
import { textDanger, } from 'privateViewsStyles/private.scss'
import { useGlobalState, } from 'state/StoreProvider'

const serviceTitle = 'What we do'
const serviceSubtitle = `
      Having and managing a correct marketing strategy 
      is crucial in a fast moving market.`

const Private: React.SFC = (): ReactElement => {
  const [ state, dispatch, ] = useGlobalState()

  console.log(
    '- RESPONSE'
  )
  console.log(
    state.priv.fetchRickAndMortyData.rickyAndMortyData
  )
  console.log(
    '- STATE'
  )
  console.log(
    state
  )

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
    <div className={textDanger}>
      <Services title={serviceTitle} subtitle={serviceSubtitle} services={data} />
    </div>
  )
}

export default Private
