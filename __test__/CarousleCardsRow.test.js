import { shallow } from 'enzyme'
import matchMedia from './matchMedia'

import {
  aRickleInTimeImageCardProps, findingNemoSpeciesCardProps,     // URL in title, no URLs in content
  theSmithHouseholdImageCardProps, batmanFilmsSpeciesCardProps  // URLs in content, no URL in title
} from './TestUtils'

import CarousleCardsRow from '../src/CarousleCardsRow'

describe(`CarousleCardsRow`, () => {
  const props = {
    cards:
      [
        aRickleInTimeImageCardProps,
        batmanFilmsSpeciesCardProps,
        findingNemoSpeciesCardProps,
        theSmithHouseholdImageCardProps
      ],
    CardClass: () => `topClass`
  }

  test(`displays cards in slider mode`, () => {
    const wrapper = shallow(<CarousleCardsRow {...props} />)
    expect(wrapper.find(`#slide`)).toHaveLength(1)
  })

  test(`displays all cards`, () => {
    expect(shallow(<CarousleCardsRow {...props}/>).find(props.CardClass)).toHaveLength(props.cards.length)
  })
})
