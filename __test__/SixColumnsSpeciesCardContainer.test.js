import { shallow } from 'enzyme'

import { batmanFilmsSpeciesCardProps, findingNemoSpeciesCardProps } from './TestUtils'
import SpeciesCard from '../src/cards/SpeciesCard'

import SixColumnsSpeciesCardContainer from '../src/containers/SixColumnsSpeciesCardContainer'

describe(`SixColumnsSpeciesCardContainer`, () => {
  const props = {
    cards: [ batmanFilmsSpeciesCardProps, findingNemoSpeciesCardProps ]
  }

  test(`renders species cards using Foundation’s block grid`, () => {
    const wrapper = shallow(<SixColumnsSpeciesCardContainer {...props} />)

    expect(wrapper.find(SpeciesCard)).toHaveLength(props.cards.length)
    expect(wrapper.find(`.row.small-up-2.medium-up-3.large-up-6`).exists()).toBe(true)
    expect(wrapper.find(`.column.column-block`)).toHaveLength(props.cards.length)
  })
})
