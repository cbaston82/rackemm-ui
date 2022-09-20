import { FaExternalLinkAlt } from 'react-icons/fa'
function Features() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="subscription text-left">
                        <h5 className="text-white-50">Feature requests</h5>
                    </div>
                    <div className="p-3 bg-white">
                        <span className="fw-bolder text-black">
                            - Allow a subscriber to add an event to calendar
                        </span>
                        <div className="d-flex justify-content-between align-items-center mt-0 py-3">
                            <h5 className="text-success p-0 m-0 fw-bolder">Started</h5>
                            <button
                                className="btn btn-outline-secondary btn-sm px-3 py-2"
                                type="button"
                            >
                                <FaExternalLinkAlt /> View Ticket
                            </button>
                        </div>
                        <div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: '70%', backgroundColor: 'var(--cyan) ' }}
                                ></div>
                            </div>
                            <p className="progress-info text-black-50 fw-light mt-2 fst-italic">
                                Created - Jan 1st, 2023
                            </p>
                        </div>
                    </div>
                    <div className="p-3 bg-white mt-3">
                        <span className="fw-bolder text-black">
                            - Allow Level 3 subscriber to link tournament payment option
                        </span>
                        <div className="d-flex justify-content-between align-items-center mt-0 py-3">
                            <h5 className="text-warning m-0 p-0 fw-bolder">Todo</h5>
                            <button
                                className="btn btn-outline-secondary btn-sm px-3 py-2"
                                type="button"
                            >
                                <FaExternalLinkAlt /> View Ticket
                            </button>
                        </div>
                        <div>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: '0%', backgroundColor: 'var(--cyan) ' }}
                                ></div>
                            </div>
                            <p className="progress-info text-black-50 mt-2 fw-light fst-italic">
                                Created - Jan 1st, 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
