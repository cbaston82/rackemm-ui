import { useEffect } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getUserWeeklyEvents, deleteUserWeeklyEvent } from '../../../redux'
import NewEventButton from '../../NewEventButton'
import CustomLoader from '../../pagesPublic/tables/CustomeLoader'
import AlertMessageWithLinkEnd from '../../AlertMessageWithLinkEnd'
import WeeklyEventTable from './WeeklyEventTable'
import BreadCrumbs from '../../BreadCrumbs'

function WeeklyEvents({ getUserWeeklyEvents, userWeeklyEvents, deleteUserWeeklyEvent }) {
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        getUserWeeklyEvents()
    }, [getUserWeeklyEvents])

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
            <BreadCrumbs
                navigateToPreviousLink={false}
                activeBreadcrumbTitle="Account weekly events"
            />
            {userWeeklyEvents.loading ? (
                <div className="d-flex justify-content-center align-content-center">
                    <CustomLoader color="white" loaderMessage="fetching events" />
                </div>
            ) : (
                <>
                    {userWeeklyEvents.events && userWeeklyEvents.events.length ? (
                        <>
                            <NewEventButton path="/account/weekly-events/create" />
                            <WeeklyEventTable
                                events={userWeeklyEvents.events}
                                handleDeleteEvent={handleDeleteEvent}
                            />
                        </>
                    ) : (
                        <AlertMessageWithLinkEnd
                            path="/account/weekly-events/create"
                            message="You have no weekly events yet. Create your first event"
                        />
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
