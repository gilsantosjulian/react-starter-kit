import React, { ReactElement, } from 'react'

import { textDanger, } from 'privateViewsStyles/private.scss'
import Services from 'organisms/Services'

const result = [
  {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    species: 'Human',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 3,
    name: 'Summer Smith',
    species: 'Human',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
]

const serviceTitle = 'What we do'
const serviceSubtitle = `
      Having and managing a correct marketing strategy 
      is crucial in a fast moving market.`

const Private: React.SFC = (): ReactElement => (
  <div className={textDanger}>
    <Services title={serviceTitle} subtitle={serviceSubtitle} services={result} />
  </div>
)

export default Private
