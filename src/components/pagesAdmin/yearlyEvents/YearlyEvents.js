import { useEffect } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getUserYearlyEvents, deleteUserYearlyEvent } from '../../../redux'
import NewEventButton from '../../NewEventButton'
import CustomLoader from '../../pagesPublic/tables/CustomeLoader'
import AlertMessageWithLinkEnd from '../../AlertMessageWithLinkEnd'
import BreadCrumbs from '../../BreadCrumbs'
import YearlyEventsTable from './YearlyEventsTable'

function YearlyEvents({ getUserYearlyEvents, userYearlyEvents, deleteUserYearlyEvent }) {
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
            <BreadCrumbs
                navigateToPreviousLink={false}
                activeBreadcrumbTitle="Account weekly events"
            />
            {userYearlyEvents.loading ? (
                <div className="d-flex justify-content-center align-content-center">
                    <CustomLoader color="white" loaderMessage="Fetching events" />
                </div>
            ) : (
                <>
                    {userYearlyEvents.events && userYearlyEvents.events.length ? (
                        <>
                            <NewEventButton path="/account/yearly-events/create" />
                            <YearlyEventsTable
                                events={userYearlyEvents.events}
                                handleDeleteEvent={handleDeleteEvent}
                            />
                        </>
                    ) : (
                        <AlertMessageWithLinkEnd
                            path="/account/yearly-events/create"
                            message="You have no yearly events yet. Create your first event"
                        />
                    )}
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userYearlyEvents: state.userYearlyEvents,
})

const mapDispatchToProps = (dispatch) => ({
    getUserYearlyEvents: () => dispatch(getUserYearlyEvents()),
    deleteUserYearlyEvent: (eventId) => dispatch(deleteUserYearlyEvent(eventId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvents)
