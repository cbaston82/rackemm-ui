import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import currencyFormatter from 'currency-formatter'
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { formatISO } from 'date-fns'
import { MoonLoader } from 'react-spinners'
import withReactContent from 'sweetalert2-react-content'
import { getUserYearlyEvents, deleteUserYearlyEvent } from '../../../redux'
import NewEventButton from '../../features/NewEventButton'
import EventsCreated from '../../features/EventsCreated'

function YearlyEvents({
    stripeCustomer,
    getUserYearlyEvents,
    userYearlyEvents,
    deleteUserYearlyEvent,
}) {
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        getUserYearlyEvents()
    }, [getUserYearlyEvents])

    const handleDeleteEvent = async (_id) => {
        MySwal.fire({
            showCancelButton: true,
            title: 'Are you sure?',
            text: 'You want to delete this event?',
            confirmButtonColor: '#00cdcd',
            confirmButtonText: 'Yes, delete this event!',
            icon: 'question',
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete.isConfirmed) {
                deleteUserYearlyEvent(_id)

                MySwal.fire({
                    confirmButtonColor: '#00cdcd',
                    title: 'Your event has been deleted',
                    icon: 'success',
                })
            }
        })
    }

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Account yearly Events</li>
                </ol>
            </nav>
            {userYearlyEvents.loading ? (
                <div className="d-flex justify-content-center align-content-center">
                    <MoonLoader size={150} loading={true} />
                </div>
            ) : (
                <>
                    {userYearlyEvents.events && userYearlyEvents.events.length ? (
                        <>
                            <NewEventButton
                                path="/account/yearly-events/create"
                                createdEventsCount={userYearlyEvents.events.length}
                                subscriptionPlanId={stripeCustomer.customer.subscriptionPlanId}
                            />
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
                                    {userYearlyEvents.events &&
                                        userYearlyEvents.events.map((event) => (
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
                                                            event.status === 'active'
                                                                ? 'success'
                                                                : 'warning'
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
                                                                    <FaEye />
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
                                                                onClick={() =>
                                                                    handleDeleteEvent(event._id)
                                                                }
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
                            <EventsCreated
                                createdEvents={userYearlyEvents}
                                stripeCustomer={stripeCustomer}
                            />
                        </>
                    ) : (
                        <div className="alert alert-info mt-3" role="alert">
                            You have no yearly events yet. Create your first event{' '}
                            <Link to="/account/yearly-events/create">Create</Link>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userYearlyEvents: state.userYearlyEvents,
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    getUserYearlyEvents: () => dispatch(getUserYearlyEvents()),
    deleteUserYearlyEvent: (eventId) => dispatch(deleteUserYearlyEvent(eventId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvents)
