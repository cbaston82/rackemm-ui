import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <section className="rackemm-hero-1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
                    <div className="col-xs-1 col-sm-12 col-md-8 col-lg-8 col-xl-12 col-xxl-12">
                        <div className="text-center text-white mt-5">
                            <h1
                                className="display-1 rackemm-text-stroke-cyan"
                                style={{ fontFamily: '"Anton", sans-serif' }}
                            >
                                A POOL TOURNAMENTS
                            </h1>
                            <h1
                                className="display-1 rackemm-text-cyan"
                                style={{ fontFamily: '"Anton", sans-serif' }}
                            >
                                DATABASE
                            </h1>
                            <p className="text-white font-monospace fst-italic">
                                Find a tournament anywhere. anytime. any place
                            </p>
                            <button className="btn btn-outline-secondary mt-3 btn-lg">
                                <Link
                                    to="/register"
                                    className="text-white"
                                    style={{ textDecoration: 'none' }}
                                >
                                    Sign up for free{' '}
                                    <FontAwesomeIcon icon={faCaretRight} className="fa-search" />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
