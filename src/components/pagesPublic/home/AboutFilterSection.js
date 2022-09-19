import LightBoxImage from '../../LightBoxImage'

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
                            <LightBoxImage image="https://res.cloudinary.com/imagine-design-develop/image/upload/v1663565503/rackemm_images/app_images/Screen_Shot_2022-09-18_at_10.31.23_PM.png" />
                            <a href="client/src/components/pagesPublic/home/AboutFilterSection#">
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
