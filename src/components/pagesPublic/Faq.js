import { Link } from 'react-router-dom'
import usePageTitle from '../../hoook/usePageTitle'

function Faq() {
    usePageTitle('- FAQ')
    return (
        <div className="container mt-5" id="faq-section">
            <div className="text-center mb-5">
                <h3 className="text-white fw-bold">Frequently Asked Questions</h3>
                <p className="text-white-50 fw-light">
                    Don&apos;t see your question?{' '}
                    <a
                        className="rackemm-text-cyan text-decoration-none"
                        href="mailto:support@rackemm.com"
                    >
                        support@rackemm.com
                    </a>
                </p>
            </div>

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
                            <strong className="text-white">Yes, you can cancel any time.</strong> If
                            you cancel before your next billing period you will have access to your
                            subscription features until that period ends.
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
                            <strong className="text-white">All feedback is welcomed.</strong> Submit
                            a feature request or bug fix on our{' '}
                            <Link className="rackemm-text-cyan text-decoration-none" to="/features">
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
                            <strong className="text-white">You can support in many ways.</strong>
                            <ul className="mt-2">
                                <li>Share the link with friends on social media.</li>
                                <li>
                                    Like and share our{' '}
                                    <a
                                        className="rackemm-text-cyan text-decoration-none"
                                        href="https://www.facebook.com/profile.php?id=100088219356877"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Facebook page
                                    </a>
                                    .
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            What games are supported?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#rackemm-faq-accordion"
                    >
                        <div className="accordion-body">
                            <strong className="text-white">
                                Multiple cue sports are supported.
                            </strong>{' '}
                            You can create events for 8-Ball, 9-Ball, 10-Ball, One Pocket, Bank
                            Pool, and more. Both weekly recurring events and one-time special events
                            are supported.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                            Do I need a subscription to browse events?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#rackemm-faq-accordion"
                    >
                        <div className="accordion-body">
                            <strong className="text-white">No.</strong> Anyone can browse and view
                            events for free. A subscription is only required to create and manage
                            your own events.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
