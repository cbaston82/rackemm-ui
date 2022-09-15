import { formatISO } from 'date-fns'

function UpcomingYearlyEventCard({ event }) {
    return (
        <div className="col-md-4">
            <div className="card text-bg-dark text-center mb-4">
                <div className="card-header">{event.city}</div>
                <div className="card-body">
                    <h5 className="card-title">{event.event}</h5>
                    <p className="card-text">${event.buyIn}</p>
                    <a href={`/yearly-event/${event._id}`} className="btn btn-outline-secondary">
                        View
                    </a>
                </div>
                <div className="card-footer text-muted text-white-50">
                    {formatISO(new Date(event.startDate), {
                        representation: 'date',
                    })}
                </div>
            </div>
        </div>
    )
}

export default UpcomingYearlyEventCard
