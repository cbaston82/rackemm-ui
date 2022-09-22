import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer mt-auto pb-3 pt-5 bg-dark rackemm-border-top">
            <div className="container">
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item">
                        <a href="/features" className="nav-link px-2 text-white-50">
                            Features
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/pricing" className="nav-link px-2 text-white-50">
                            Pricing
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/faq" className="nav-link px-2 text-white-50">
                            FAQs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link px-2 text-white-50">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/privacy-policy" className="nav-link px-2 text-white-50">
                            Privacy Policy
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/terms-of-use" className="nav-link px-2 text-white-50">
                            Terms of Use
                        </a>
                    </li>
                </ul>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <p className="text-white p-0 m-0 m-3">&#169; 2022</p>
                    <Link className="navbar-brand p-0 m-0 m-3" to="/">
                        <img
                            src="https://res.cloudinary.com/imagine-design-develop/image/upload/v1663402485/rackemm_images/app_images/logo-white.png"
                            height="40"
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
