import { FaArrowCircleRight } from 'react-icons/fa'
import Button from '../../Button'

function HeroSection() {
    return (
        <section className="rackemm-hero-1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col col-md-2 col-lg-2 col-xl-2 col-xxl-2" />
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
                            <Button
                                className="btn btn-outline-warning btn-lg mt-5"
                                path="/register"
                                buttonText="Sign up for free"
                            >
                                <FaArrowCircleRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
