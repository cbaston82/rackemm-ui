import './../../css/footer.css'
function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark" id="footer-section">
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
                        <a href="/PrivacyPolicy" className="nav-link px-2 text-white-50">
                            Privacy Policy
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/TermsOfUse" className="nav-link px-2 text-white-50">
                            Terms of Use
                        </a>
                    </li>
                </ul>
                <p className="text-center text-white-50">&#169; 2022 RACKEMM</p>
            </div>
        </footer>
    )
}

export default Footer
