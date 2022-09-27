function EventDetails({ event }) {
    return (
        <>
            <div className="row d-flex flex-row-reverse">
                <h4 className="fw-bolder mt-4 mt-sm-0 border-bottom">{event.title}</h4>
                <h6 className="fw-light mt-3">{event.description}</h6>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Venue</label>
                            <p className="mb-0 fw-light">{event.venue}</p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Address</label>
                            <p className="mb-0 text-primary">
                                {event.address}, {event.city} {event.state}, {event.zipCode}
                            </p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Game</label>
                            <p className="m-0 fw-light">{event.game}</p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Rating System</label>
                            <p className="mb-0 fw-light">{event.ratingSystem}</p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Point of Contact</label>
                            <p className="mb-0 fw-light">{event.pointOfContact}</p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Point of Contact Phone</label>
                            <p className="mb-0 fw-light">{event.pointOfContactPhone}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default EventDetails
