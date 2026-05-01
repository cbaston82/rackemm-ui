import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import usePageTitle from '../../hoook/usePageTitle'

function About() {
    usePageTitle('- About')
    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center">
            <div className="card w-75 border-0 rounded-0 bg-dark text-white-50">
                <div className="d-block justify-content-center">
                    <div className="rackemm-bg-cyan p-3 py-5 rackemm-hero-2" />
                    <div className="text-center px-5">
                        <div className="position-relative mr-3" style={{ top: '-62px' }}>
                            <img
                                src="/profile.jpg"
                                className="rounded"
                                alt="Carlos Baston"
                                width="200"
                            />
                            <h4 className="mt-3 fw-bold">Carlos Baston.</h4>
                            <p className="fw-semibold text-white">
                                Software Engineer / Pool Player
                            </p>
                            <p className="mt-5 text-justify fw-light lead">
                                I developed <span className="rackemm-text-cyan">RACKEMM</span> to
                                solve a few problems I&apos;ve encountered over 10 years of playing
                                pool. The one question every pool player asks is:{' '}
                                <em className="text-white">
                                    Where can I find a tournament today? What time does it start?
                                    What&apos;s the buy-in?
                                </em>{' '}
                                Finding a tournament has always meant texting a friend, digging
                                through Facebook groups, or calling local pool halls. I built{' '}
                                <span className="rackemm-text-cyan">RACKEMM</span> to put an end to
                                that hassle.
                            </p>
                            <p className="lead">
                                I started on a much smaller scale, supporting my local pool
                                community in Las Vegas, and quickly realized the problem was bigger
                                than just one city.{' '}
                                <span className="rackemm-text-cyan">RACKEMM</span> is built to
                                bridge the pool tournament scene on a global scale — a single place
                                to find a tournament anywhere, anytime, at any buy-in.
                            </p>
                            <p className="lead">
                                I&apos;m not just the developer and creator of{' '}
                                <span className="rackemm-text-cyan">RACKEMM</span> — I&apos;m a pool
                                player who understands what we&apos;re all looking for. This app is
                                geared toward the player first and will always be open to{' '}
                                <Link
                                    className="text-decoration-none rackemm-text-cyan"
                                    to="/features"
                                >
                                    suggestions and feature requests
                                </Link>
                                .
                            </p>
                            <a
                                className="text-white"
                                href="https://www.facebook.com/profile.php?id=100088219356877"
                            >
                                <FaFacebook className="mt-5" size={40} />
                            </a>
                            <p className="mt-2"> Like us on facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
