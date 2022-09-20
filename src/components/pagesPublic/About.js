function About() {
    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center">
            <div className="card w-75 border-0 rounded-0">
                <div className="d-block justify-content-center">
                    <div className="rackemm-bg-cyan p-3 py-5 rackemm-hero-2"></div>
                    <div className="text-center px-5">
                        <div className="position-relative mr-3" style={{ top: '-62px' }}>
                            <img
                                src="https://res.cloudinary.com/imagine-design-develop/image/upload/v1663302985/rackemm_images/app_images/4C3BEB2A-AD23-4804-9E1E-31F703A7DAE1.jpg"
                                className="rounded"
                                alt=""
                                width="200"
                            />
                            <h4 className="mt-3 fw-bold">Carlos Baston</h4>
                            <p className="fw-semibold text-black-50">
                                Software Engineer / Pool Player
                            </p>
                            <p className="mt-5 text-justify fw-light lead">
                                I developed{' '}
                                <span className="rackemm-text-cyan fw-semibold">RACKEMM</span> to
                                solve a few problems I've encountered over the last 8 + years of
                                playing pool. One particular problem is the question we all ask as
                                pool players;{' '}
                                <em className="fw-semibold">
                                    Where can I find a tournament today? What time does this
                                    tournament start? How much is this tournament?
                                </em>{' '}
                                And so on. As an average pool player who primarily works nine to
                                five, this has always been frustrating. Finding a tournament usually
                                requires texting a friend and asking if they know of one, finding a
                                Facebook group and asking around, calling local pool halls, etc. I
                                created{' '}
                                <span className="rackemm-text-cyan fw-semibold">RACKEMM</span> to
                                solve some of these problems we all have as pool players and much
                                more.
                            </p>
                            <p className="lead">
                                I've decided to utilize my skills in writing software to help solve
                                some of these problems we all face today. I've attempted this a
                                couple of times on a much smaller scale to support my local pool
                                community in Las Vegas and realized it's much deeper than just
                                Vegas.{' '}
                                <span className="rackemm-text-cyan fw-semibold">RACKEMM</span> is a
                                tool that can help bridge the pool tournament scene on a global
                                scale—making it a one-stop search to find a tournament anywhere,
                                anytime, with any buy-in and more.{' '}
                                <span className="rackemm-text-cyan fw-semibold">RACKEMM</span> is a
                                database for all pool tournaments that will allow a player to filter
                                through every tournament entered into the system.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
