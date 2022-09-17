import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import '../../../css/heroSection.css'

function HeroSection() {
    return (
        <section className="mb-5" id="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                    <div className="col-xs-1 col-sm-12 col-md-8 col-lg-8 col-xl-12 col-xxl-12">
                        <div className="text-center text-white mt-5">
                            <p
                                className="display-4 text-stroke-cyan"
                                style={{ fontFamily: '"Anton", sans-serif' }}
                            >
                                A POOL TOURNAMENTS
                            </p>
                            <p
                                className="display-1 text-cyan"
                                style={{ fontFamily: '"Anton", sans-serif' }}
                            >
                                DATABASE
                            </p>
                            <p className="text-white font-monospace fst-italic">
                                Find a tournament anywhere. anytime. any place
                            </p>
                            <button className="btn btn-outline-light mt-3 btn-lg">
                                <a
                                    href="/about"
                                    className="text-white-50"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Learn more{' '}
                                    <FontAwesomeIcon icon={faCaretRight} className="fa-search" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
