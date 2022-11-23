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
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://app.termly.io/document/privacy-policy/8181b809-9699-42a3-801e-29dfb04f0396"
                        className="nav-link px-2 text-white-50"
                    >
                        Privacy Policy
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://app.termly.io/document/terms-of-use-for-saas/b77937b2-7c78-44e7-8fea-dafedb245d4b"
                        className="nav-link px-2 text-white-50"
                    >
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
        </footer>
    )
}

export default Footer
