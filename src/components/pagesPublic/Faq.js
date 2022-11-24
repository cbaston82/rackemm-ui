import { Link } from 'react-router-dom'
import usePageTitle from '../../hoook/usePageTitle'

function Faq() {
    usePageTitle('- FAQ')
    return (
        <div className="container" id="faq-section">
            <p className="text-white">
                Dont see your question and need further assistance? email us at{' '}
                <a className="rackemm-text-cyan text-decoration-none" href="support@rackemm.com">
                    support@rackemm.com
                </a>
            </p>
            <div className="accordion accordion-flush rackemm-accordion" id="rackemm-faq-accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            Can I cancel my subscription any time?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#rackemm-faq-accordion"
                    >
                        <div className="accordion-body">
                            <strong>Yes you can cancel any time.</strong> If you cancel before your
                            next billing period you will have access to your subscriptions features
                            until your next billing period.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            How can I submit a feature request or bug fix?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#rackemm-faq-accordion"
                    >
                        <div className="accordion-body">
                            <strong>All feedback is welcomed.</strong> Submit a feature request or
                            bug fix on our{' '}
                            <Link className="text-decoration-none" to="/features">
                                Features Page
                            </Link>
                            .
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            How can I support RACKEMM?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#rackemm-faq-accordion"
                    >
                        <div className="accordion-body">
                            <strong>You can support many ways.</strong>
                            <ul>
                                <li>
                                    Share the link with your friends via all social media platforms.
                                </li>
                                <li>
                                    Like our{' '}
                                    <a
                                        className="text-decoration-none"
                                        href="https://www.facebook.com/profile.php?id=100088219356877"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        page
                                    </a>{' '}
                                    and share it.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
