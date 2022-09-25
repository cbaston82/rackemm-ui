import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer mt-auto pb-3 pt-5 bg-dark rackemm-border-top">
            <ul className="nav justify-content-center pb-3 mb-3">
                <li className="nav-item">
                    <Link to="/features" className="nav-link px-2 text-white-50">
                        Features
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/pricing" className="nav-link px-2 text-white-50">
                        Pricing
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/faq" className="nav-link px-2 text-white-50">
                        FAQs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link px-2 text-white-50">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/privacy-policy" className="nav-link px-2 text-white-50">
                        Privacy Policy
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/terms-of-use" className="nav-link px-2 text-white-50">
                        Terms of Use
                    </Link>
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
        </footer>
    )
}

export default Footer
