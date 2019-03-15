import { shallow, mount } from 'enzyme'

import {
  aRickleInTimeImageCardProps, findingNemoSpeciesCardProps,     // URL in title, no URLs in content
  theSmithHouseholdImageCardProps, batmanFilmsSpeciesCardProps  // URLs in content, no URL in title
} from './TestUtils'

import Card from '../src/Card'

import ResponsiveCardsRow from '../src/ResponsiveCardsRow'

describe(`ResponsiveCardsRow`, () => {
  const props = {
    cards:
      [
        aRickleInTimeImageCardProps,
        batmanFilmsSpeciesCardProps,
        findingNemoSpeciesCardProps,
        theSmithHouseholdImageCardProps
      ]
  }

  test(`renders species cards using Foundation’s block grid`, () => {
    const wrapper = shallow(<ResponsiveCardsRow {...props}/>)

    expect(wrapper.find(Card)).toHaveLength(props.cards.length)
    expect(wrapper.find(`.row.small-up-2.medium-up-4.large-up-8`)).toExist()
    // Warning! If we use mount the test below will fail. Have a look at the snapshot and discover why.
    // (Hint: styled-components is the culprit)
    expect(wrapper.find(`.column.column-block`)).toHaveLength(props.cards.length)
  })

  test(`matches snapshot`, () => {
    expect(mount(<ResponsiveCardsRow {...props}/>)).toMatchSnapshot()
  })
})
