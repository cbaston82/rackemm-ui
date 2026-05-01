import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="mt-auto pt-5 pb-4 bg-dark rackemm-border-top">
            <div className="container">
                <div className="row mb-4 g-4">
                    <div className="col-sm-12 col-md-4">
                        <Link className="navbar-brand" to="/">
                            <img
                                src="https://res.cloudinary.com/hoo/image/upload/v1663402485/rackemm_images/app_images/logo-white.png"
                                height="40"
                                alt="RACKEMM logo"
                            />
                        </Link>
                        <p
                            className="text-white-50 mt-3"
                            style={{ fontSize: '0.875rem', maxWidth: '240px' }}
                        >
                            Find a pool tournament anywhere, anytime — built by a player, for
                            players.
                        </p>
                        <a
                            href="https://www.facebook.com/profile.php?id=100088219356877"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white-50"
                            aria-label="RACKEMM on Facebook"
                        >
                            <FaFacebook size={22} />
                        </a>
                    </div>

                    <div className="col-6 col-md-4">
                        <h6 className="rackemm-text-cyan fw-bold mb-3 text-uppercase">Navigate</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <Link
                                    to="/special-events"
                                    className="text-white-50 text-decoration-none footer-link"
                                >
                                    Tournaments
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to="/features"
                                    className="text-white-50 text-decoration-none footer-link"
                                >
                                    Features
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to="/pricing"
                                    className="text-white-50 text-decoration-none footer-link"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to="/faq"
                                    className="text-white-50 text-decoration-none footer-link"
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-white-50 text-decoration-none footer-link"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-4">
                        <h6 className="rackemm-text-cyan fw-bold mb-3 text-uppercase">Legal</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <a
                                    href="https://app.termly.io/document/privacy-policy/8181b809-9699-42a3-801e-29dfb04f0396"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white-50 text-decoration-none footer-link"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://app.termly.io/document/terms-of-use-for-saas/b77937b2-7c78-44e7-8fea-dafedb245d4b"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white-50 text-decoration-none footer-link"
                                >
                                    Terms of Use
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="rackemm-border-top pt-3 text-center">
                    <p className="text-white-50 mb-0" style={{ fontSize: '0.8rem' }}>
                        &copy; {year} RACKEMM. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
