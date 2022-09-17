function EventsCreated({ events }) {
    return (
        <p className="fst-italic fw-light">
            <span className="fw-bold">{events.length} created</span>{' '}
        </p>
    )
}

export default EventsCreated
