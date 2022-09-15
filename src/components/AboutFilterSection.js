import TableScreenshot from '../images/table-screenshot.png'

function AboutFilterSection() {
    return (
        <section className="my-5 py-5" id="about-filter-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 gx-5 mb-4">
                        <div
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            data-mdb-ripple-color="light"
                        >
                            <img src={TableScreenshot} alt="filter table" className="img-fluid" />
                            <a href="client/src/components/AboutFilterSection#">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                                ></div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6 gx-5 mb-4">
                        <h4>
                            <strong>Filter Tournaments</strong>
                        </h4>
                        <p className="text-muted">
                            The filtering system is easy to use and snappy; allowing you to find a
                            tournament of your choice in seconds.
                        </p>
                        <p>
                            <strong>Filter by BuyIn</strong>
                        </p>
                        <p className="text-muted">
                            Find a tournament that fits your budget by adjusting the{' '}
                            <strong>Buy In</strong> range input.
                        </p>
                        <p>
                            <strong>Filter by City</strong>
                        </p>
                        <p className="text-muted">
                            With the filter by city you can find a tournament in any city
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutFilterSection
