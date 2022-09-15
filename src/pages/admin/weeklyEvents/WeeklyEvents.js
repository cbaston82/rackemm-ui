import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import currencyFormatter from 'currency-formatter'
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { MoonLoader } from 'react-spinners'
import withReactContent from 'sweetalert2-react-content'
import { getUserWeeklyEvents, deleteUserWeeklyEvent } from '../../../redux'
import { sortByDayInWeek } from '../../../redux/helpers/dates'
import EventsCreated from '../../../components/features/EventsCreated'
import NewEventButton from '../../../components/features/NewEventButton'

function WeeklyEvents({
    stripeCustomer,
    getUserWeeklyEvents,
    userWeeklyEvents,
    deleteUserWeeklyEvent,
}) {
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        getUserWeeklyEvents()
    }, [])

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
                deleteUserWeeklyEvent(_id)

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
                    <li className="breadcrumb-item active">Account weekly Events</li>
                </ol>
            </nav>
            {userWeeklyEvents.loading ? (
                <div className="d-flex justify-content-center align-content-center">
                    <MoonLoader size={150} loading={true} />
                </div>
            ) : (
                <>
                    {userWeeklyEvents.events && userWeeklyEvents.events.length ? (
                        <>
                            <NewEventButton
                                path="/account/weekly-events/create"
                                createdEventsCount={userWeeklyEvents.events.length}
                                subscriptionPlanId={stripeCustomer.customer.subscriptionPlanId}
                            />
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
                                    {userWeeklyEvents.events &&
                                        sortByDayInWeek(userWeeklyEvents.events).map((event) => (
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
                                                            <Link to={`/weekly-event/${event._id}`}>
                                                                <button className="btn btn-outline-primary btn-sm">
                                                                    <FaEye />
                                                                </button>
                                                            </Link>
                                                        </div>
                                                        <div className="ms-3">
                                                            <Link
                                                                to={`/account/weekly-events/edit/${event._id}`}
                                                            >
                                                                <button className="btn btn-outline-warning btn-sm">
                                                                    <FaEdit />
                                                                </button>
                                                            </Link>
                                                        </div>
                                                        <div className="ms-3">
                                                            <button
                                                                data-id={event._id}
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
                                createdEvents={userWeeklyEvents}
                                stripeCustomer={stripeCustomer}
                            />
                        </>
                    ) : (
                        <div className="alert alert-info mt-3" role="alert">
                            You have no weekly events yet. Create your first event{' '}
                            <Link to="/account/weekly-events/create">Create</Link>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userWeeklyEvents: state.userWeeklyEvents,
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    getUserWeeklyEvents: () => dispatch(getUserWeeklyEvents()),
    deleteUserWeeklyEvent: (eventId) => dispatch(deleteUserWeeklyEvent(eventId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvents)
