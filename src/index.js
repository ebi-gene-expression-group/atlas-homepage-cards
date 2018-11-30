import withFetchLoader from './containers/FetchLoader'
import SceaHomepageSpeciesContainer from './containers/SceaHomepageSpeciesContainer'
import HcaLandingPageContainer from './containers/HcaLandingPageContainer'
import SceaHomePageLatestExperimentContainer from './containers/SceaHomePageLatestExperimentContainer'

const _SceaHomepageSpeciesContainer = withFetchLoader(SceaHomepageSpeciesContainer)
const _HcaLandingPageContainer = withFetchLoader(HcaLandingPageContainer)
const _SceaHomePageLatestExperimentContainer = withFetchLoader(SceaHomePageLatestExperimentContainer)

export {
  _SceaHomepageSpeciesContainer as SceaHomepageSpeciesContainer,
  _HcaLandingPageContainer as HcaLandingPageContainer,
  _SceaHomePageLatestExperimentContainer as SceaHomePageLatestExperimentContainer
}
