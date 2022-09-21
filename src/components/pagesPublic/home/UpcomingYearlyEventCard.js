import { FaExternalLinkAlt, FaMapMarked } from 'react-icons/fa'
import { formatISO } from 'date-fns'

function UpcomingYearlyEventCard({ event }) {
    return (
        <div className="col-md-4">
            <div className="card text-center mb-4 rackemm-card">
                <div className="card-header rackemm-card-header">
                    <span className="fw-bold text-white">
                        <FaMapMarked /> {event.city}
                    </span>
                </div>
                <div className="card-body rackemm-card-body">
                    <h5 className="card-title">{event.event}</h5>
                    <h5 className="card-text text-white fw-bolder mb-3">${event.buyIn} Buy-In</h5>
                    <p className="text-white-50 fw-lighter text-truncate">{event.description}</p>
                    <a
                        href={`/yearly-event/${event._id}`}
                        className="btn btn-sm btn-outline-secondary"
                    >
                        <FaExternalLinkAlt /> View
                    </a>
                </div>
                <div className="card-footer text-white fw-light rackemm-card-footer">
                    {formatISO(new Date(event.startDate), {
                        representation: 'date',
                    })}
                </div>
            </div>
        </div>
    )
}

export default UpcomingYearlyEventCard
