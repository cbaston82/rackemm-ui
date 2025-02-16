function FeaturesSection() {
    return (
        <section className="py-5 rackemm-gradient-black-to-dark-gray">
            <div className="container">
                <div className="row d-flex flex-row-reverse">
                    <div className="col-md-6 gx-5 mt-5 mb-5 my-md-0 d-flex flex-column justify-content-around">
                        <div className="text-center">
                            <h4 className="text-white">
                                <strong>Create Events Quickly</strong>
                            </h4>
                            <div className="d-flex">
                                <p className="text-white-50 w-75 mx-auto">
                                    Our easy to use forms allow you to quickly create events hassle
                                    free.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 gx-5 mb-4">
                        <div
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            data-mdb-ripple-color="light"
                        >
                            <img
                                className="img-fluid img-thumbnail bg-transparent border-0"
                                src="https://res.cloudinary.com/hoo/image/upload/v1663863933/rackemm_images/app_images/web_and_mobile_view_forms.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 gx-5 mt-5 mb-5 mt-md-0 d-flex flex-column justify-content-around a">
                        <div className="text-center">
                            <h4 className="text-white">
                                <strong>Find any game</strong>
                            </h4>
                            <div className="d-flex">
                                <p className="text-white-50 w-75 mx-auto">
                                    Filter through thousands of events in seconds. Spend more time
                                    playing and less time searching.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 gx-5 mb-4">
                        <div
                            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                            data-mdb-ripple-color="light"
                        >
                            <img
                                className="img-fluid img-thumbnail border-0 bg-transparent"
                                src="https://res.cloudinary.com/hoo/image/upload/v1663798938/rackemm_images/app_images/filtering_features.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
