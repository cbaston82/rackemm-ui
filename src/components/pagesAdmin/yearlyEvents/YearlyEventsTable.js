import { formatISO } from 'date-fns'
import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'
import { FaEdit, FaExternalLinkAlt, FaTrashAlt } from 'react-icons/fa'
import EventsCreated from '../../EventsCreated'

function YearlyEventsTable({ events, handleDeleteEvent }) {
    return (
        <>
            <table className="table table-dark mt-3">
                <thead>
                    <tr>
                        <th>Venue</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th className="d-none d-md-table-cell">Buy-in</th>
                        <th className="d-none d-md-table-cell">Game</th>
                        <th className="d-none d-md-table-cell">Status</th>
                        <th className="d-none d-md-table-cell">Rating System</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {events &&
                        events.map((event) => (
                            <tr key={event._id}>
                                <td className="text-white-50">{event.venue}</td>
                                <td className="text-white-50">
                                    {formatISO(new Date(event.startDate), {
                                        representation: 'date',
                                    })}
                                </td>
                                <td className="text-white-50">{event.startTime}</td>
                                <td className="text-white-50 d-none d-md-table-cell">
                                    {currencyFormatter.format(event.buyIn, {
                                        code: 'USD',
                                    })}
                                </td>
                                <td className="text-white-50 d-none d-md-table-cell">
                                    {event.game}
                                </td>
                                <td className="text-white-50 d-none d-md-table-cell">
                                    <span
                                        className={`badge bg-${
                                            event.status === 'active' ? 'success' : 'warning'
                                        }`}
                                    >
                                        {event.status}
                                    </span>
                                </td>
                                <td className="text-white-50 d-none d-md-table-cell">
                                    {event.ratingSystem}
                                </td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <div className="ms-3">
                                            <Link to={`/yearly-event/${event._id}`}>
                                                <button className="btn btn-outline-light btn-sm">
                                                    <FaExternalLinkAlt />
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="ms-3">
                                            <Link
                                                type="btn"
                                                to={`/account/yearly-events/edit/${event._id}`}
                                                className="btn btn-outline-info btn-sm"
                                            >
                                                <FaEdit />
                                            </Link>
                                        </div>
                                        <div className="ms-3">
                                            <button
                                                onClick={() => handleDeleteEvent(event._id)}
                                                className="btn btn-outline-danger btn-sm"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <EventsCreated events={events} />
        </>
    )
}

export default YearlyEventsTable
