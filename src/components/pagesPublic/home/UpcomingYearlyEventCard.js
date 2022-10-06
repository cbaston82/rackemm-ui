import { FaExternalLinkAlt, FaMapMarked } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function UpcomingYearlyEventCard({ event }) {
    return (
        <div className="col-md-4">
            <div className="card text-center mb-4 rackemm-card">
                <div className="card-header">
                    <span className="fw-bold text-black-50 font-monospace">
                        <FaMapMarked /> {event.city}
                    </span>
                </div>
                <div className="card-body py-5">
                    <h5 className="card-title text-white pb-3">{event.title}</h5>
                    <div className="d-flex flex-row justify-content-around pb-5">
                        <div>
                            <span className="mb-3 text-white fw-bold">${event.buyIn}</span>{' '}
                            <span className="text-white-50">Buyin</span>
                        </div>

                        <div>
                            <span className="mb-3 text-white fw-bold">{event.ratingsAverage}</span>{' '}
                            <span className="text-white-50">Rating ({event.ratingsQuantity})</span>
                        </div>
                    </div>
                    <Link
                        to={`/yearly-event/${event._id}`}
                        className="btn btn-sm btn-outline-secondary px-4 py-2"
                    >
                        View Details <FaExternalLinkAlt />
                    </Link>
                </div>
                <div className="card-footer text-black-50 fw-light">
                    {new Date(event.startTime).toLocaleString([], {
                        month: '2-digit',
                        day: '2-digit',
                        year: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </div>
            </div>
        </div>
    )
}

export default UpcomingYearlyEventCard
