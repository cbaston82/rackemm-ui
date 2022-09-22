import HeroSection from './HeroSection'
import UpcomingEventsSection from './UpcomingEventsSection'
import FeaturesSection from './FeaturesSection'
import usePageTitle from '../../../hoook/usePageTitle'

function Landing() {
    usePageTitle('- Home')
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <UpcomingEventsSection />
        </>
    )
}

export default Landing
