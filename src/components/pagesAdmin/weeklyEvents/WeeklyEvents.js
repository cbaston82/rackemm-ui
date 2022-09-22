import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserWeeklyEvents, deleteUserWeeklyEvent } from '../../../redux'
import NewEventButton from '../../NewEventButton'
import CustomLoader from '../../pagesPublic/tables/CustomeLoader'
import AlertMessageWithLinkEnd from '../../AlertMessageWithLinkEnd'
import WeeklyEventTable from './WeeklyEventTable'
import BreadCrumbs from '../../BreadCrumbs'
import useDeleteSwalModal from '../../../hoook/useDeleteSwalModal'
import usePageTitle from '../../../hoook/usePageTitle'

function WeeklyEvents({ getUserWeeklyEvents, userWeeklyEvents, deleteUserWeeklyEvent }) {
    usePageTitle('- Account Weekly Events')

    useEffect(() => {
        getUserWeeklyEvents()
    }, [getUserWeeklyEvents])

    const [handleDeleteEvent] = useDeleteSwalModal(deleteUserWeeklyEvent)

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
