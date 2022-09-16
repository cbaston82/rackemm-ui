function FeaturesPage() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="subscription text-left">
                        <h5>Feature requests</h5>
                    </div>
                    <div className="plan p-3 bg-white">
                        <span>Story</span>
                        <div className="d-flex justify-content-between align-items-baseline align-content-center mt-2">
                            <h5>Started</h5>
                            <button
                                className="btn btn-outline-primary btn-sm px-3 py-2"
                                type="button"
                            >
                                View Ticket
                            </button>
                        </div>
                        <div>
                            <span className="progress-info">
                                As a user I would like to add a yearly event to my calendar
                            </span>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: '70%' }}
                                ></div>
                            </div>
                            <span className="progress-info">Created - Jan 1st, 2023</span>
                        </div>
                    </div>
                    <div className="plan p-3 mt-3 bg-white">
                        <span>Story</span>
                        <div className="d-flex justify-content-between align-items-baseline align-content-center mt-2">
                            <h5>Todo</h5>
                            <button
                                className="btn btn-outline-primary btn-sm px-3 py-2"
                                type="button"
                            >
                                View Ticket
                            </button>
                        </div>
                        <div>
                            <span className="progress-info">
                                As a user I would like to create a player list to show the public
                                who is entered into my tournament
                            </span>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: '0%' }}
                                ></div>
                            </div>
                            <span className="progress-info">Created - Jan 4th, 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage
