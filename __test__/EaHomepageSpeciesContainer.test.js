import React from 'react'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { batmanFilmsSpeciesCardProps, findingNemoSpeciesCardProps } from './TestUtils'
import AtalsSpeciesCard from '../src/cards/AtlasSpeciesCard'

import EaHomepageSpeciesContainer from '../src/containers/EaHomepageSpeciesContainer'

Enzyme.configure({ adapter: new Adapter() })

describe(`EaHomepageSpeciesContainer`, () => {
  const props = {
    cards: [ batmanFilmsSpeciesCardProps, findingNemoSpeciesCardProps ]
  }

  test(`renders species cards using Foundation’s block grid`, async () => {
    const wrapper = shallow(<EaHomepageSpeciesContainer {...props} />)

    expect(wrapper.find(AtalsSpeciesCard)).toHaveLength(props.cards.length)
    expect(wrapper.find(`.row.small-up-2.medium-up-6`).exists()).toBe(true)
    expect(wrapper.find(`.column.column-block`)).toHaveLength(props.cards.length)
  })
})
