import withFetchLoader from './containers/FetchLoader'
import SceaHomepageSpeciesContainer from './containers/SceaHomepageSpeciesContainer'
import HcaLandingPageContainer from './containers/HcaLandingPageContainer'
import EaHomepageSpeciesContainer from './containers/EaHomepageSpeciesContainer'

const _SceaHomepageSpeciesContainer = withFetchLoader(SceaHomepageSpeciesContainer)
const _HcaLandingPageContainer = withFetchLoader(HcaLandingPageContainer)
const _EaHomepageSpeciesContainer = withFetchLoader(EaHomepageSpeciesContainer)

export {
    _SceaHomepageSpeciesContainer as SceaHomepageSpeciesContainer,
    _HcaLandingPageContainer as HcaLandingPageContainer,
    _EaHomepageSpeciesContainer as EaHomepageSpeciesContainer
}
