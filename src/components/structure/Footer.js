function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a
                            href="/client/src/components/pagesPublic"
                            className="nav-link px-2 text-muted"
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/features" className="nav-link px-2 text-muted">
                            Features
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/pricing" className="nav-link px-2 text-muted">
                            Pricing
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/faq" className="nav-link px-2 text-muted">
                            FAQs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link px-2 text-muted">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/PrivacyPolicy" className="nav-link px-2 text-muted">
                            Privacy Policy
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/TermsOfUse" className="nav-link px-2 text-muted">
                            Terms of Use
                        </a>
                    </li>
                </ul>
                <p className="text-center text-muted">&#169; 2022 RACKEMM</p>
            </div>
        </footer>
    )
}

export default Footer
