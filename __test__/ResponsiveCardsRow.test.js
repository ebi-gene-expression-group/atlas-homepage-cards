import { shallow } from 'enzyme'
import matchMedia from './matchMedia'

import {
  aRickleInTimeImageCardProps, findingNemoSpeciesCardProps,     // URL in title, no URLs in content
  theSmithHouseholdImageCardProps, batmanFilmsSpeciesCardProps  // URLs in content, no URL in title
} from './TestUtils'

import ResponsiveCardsRow from '../src/ResponsiveCardsRow'

describe(`ResponsiveCardsRow`, () => {
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

  test(`displays cards in default row mode`, () => {
    const wrapper = shallow(<ResponsiveCardsRow {...props}/>)
    expect(wrapper.find(`#slide`)).toHaveLength(0)
  })

  test(`displays cards in slider mode if isSlider is true`, () => {
    const wrapper = shallow(<ResponsiveCardsRow {...props} isSlider={true}/>)
    expect(wrapper.find(`#slide`)).toHaveLength(1)
  })

  test(`displays all cards`, () => {
    expect(shallow(<ResponsiveCardsRow {...props}/>).find(props.CardClass)).toHaveLength(props.cards.length)
  })
})
