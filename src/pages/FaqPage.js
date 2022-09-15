import '../faq.css'
import { Link } from 'react-router-dom'
function FaqPage() {
    return (
        <div className="container">
            <p>
                Dont see your question and need further assistance? email us at{' '}
                <a href="info@rackemm.com">info.rackemm.com</a>
            </p>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Can I cancel any time?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
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
                            Are feature requests welcomed?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>All feature requests are welcomed.</strong> We welcome all
                            feedback and feature request; this will allow us to make this
                            application more robust and unique. You can email us at{' '}
                            <a href="mailto: info@rackemm.com">info@racket.com</a> with any feature
                            request. If your feature request is accepted we will add it to the{' '}
                            <Link to="/features">Features Page</Link>.
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
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>You can support many ways.</strong>
                            <ul>
                                <li>
                                    Share the link with your friends via all social media platforms.
                                </li>
                                <li>Like our page and share it.</li>
                                <li>
                                    You can donate via <a href="mailto: abc@example.com">Paypal</a>.
                                    You will be mentioned in our monthly newsletter, unless you
                                    would like to stay anonymous.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage
