import '../../about.css'

function AboutPage() {
    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center">
            <div id="about-section">
                <div className="card">
                    <div className=" d-block justify-content-center">
                        <div className="area1 p-3 py-5"></div>
                        <div className="area2 p- text-center px-3">
                            <div className="image mr-3">
                                <img
                                    src="https://res.cloudinary.com/imagine-design-develop/image/upload/v1663302985/rackemm_images/4C3BEB2A-AD23-4804-9E1E-31F703A7DAE1.jpg"
                                    className="rounded"
                                    alt=""
                                    width="100"
                                />
                                <h4 className="mt-3 fw-bold">Carlos Baston</h4>
                                <p className="mt-3 text-justify fw-light">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                    assumenda corporis doloremque doloribus exercitationem id illum,
                                    labore neque officiis quidem similique, sunt suscipit vel, velit
                                    vero. Ad necessitatibus non quibusdam!
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
