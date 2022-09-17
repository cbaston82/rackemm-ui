import { sortByDayInWeek } from '../../../redux/helpers/dates'
import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'
import EventsCreated from '../../EventsCreated'

function WeeklyEventTable({ events, handleDeleteEvent }) {
    return (
        <>
            <table className="table table-dark mt-3">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Venue</th>
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
                        sortByDayInWeek(events).map((event) => (
                            <tr key={event._id}>
                                <td className="text-white-50">{event.day}</td>
                                <td className="text-white-50">{event.venue}</td>
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
                                            <Link to={`/weekly-event/${event._id}`}>
                                                <button className="btn btn-outline-light btn-sm">
                                                    <FaEye />
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="ms-3">
                                            <Link to={`/account/weekly-events/edit/${event._id}`}>
                                                <button className="btn btn-outline-info btn-sm">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="ms-3">
                                            <button
                                                data-id={event._id}
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
export default WeeklyEventTable
