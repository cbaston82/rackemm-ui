import LightBoxImage from '../../LightBoxImage'

function CreateEventFeature() {
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
                    <div className="col-md-6 gx-5 mt-5 mb-5 my-md-0 d-flex flex-column justify-content-around">
                        <div className="text-center">
                            <h4 className="text-white">
                                <strong>Create Events Quickly</strong>
                            </h4>
                            <p className="text-white-50">
                                Our easy to use forms allow you to quickly create an event.
                            </p>
                            {/*<p>*/}
                            {/*    <strong className="text-white text-opacity-75">*/}
                            {/*        Filter by BuyIn*/}
                            {/*    </strong>{' '}*/}
                            {/*    <br />*/}
                            {/*    <span className="text-white-50 fw-light">*/}
                            {/*        Find a tournament that fits your budget by adjusting the{' '}*/}
                            {/*        <strong>Buy In</strong> range input.*/}
                            {/*    </span>*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-row-reverse mt-5">
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
                    <div className="col-md-6 gx-5 mt-5 mt-md-0 d-flex flex-column justify-content-around a">
                        <div className="text-center">
                            <h4 className="text-white">
                                <strong>Create Events Quickly</strong>
                            </h4>
                            <p className="text-white-50">
                                Our easy to use forms allow you to quickly create an event.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateEventFeature
