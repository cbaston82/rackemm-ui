import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserYearlyEvents, deleteUserYearlyEvent } from '../../../redux'
import NewEventButton from '../../NewEventButton'
import CustomLoader from '../../CustomeLoader'
import AlertMessageWithLinkEnd from '../../AlertMessageWithLinkEnd'
import BreadCrumbs from '../../BreadCrumbs'
import YearlyEventsTable from './YearlyEventsTable'
import useDeleteSwalModal from '../../../hoook/useDeleteSwalModal'
import usePageTitle from '../../../hoook/usePageTitle'

function YearlyEvents({ getUserYearlyEvents, userYearlyEvents, deleteUserYearlyEvent }) {
    usePageTitle('- Account Yearly Event')
    useEffect(() => {
        getUserYearlyEvents()
    }, [getUserYearlyEvents])

    const [handleDeleteEvent] = useDeleteSwalModal(deleteUserYearlyEvent)

    return (
        <div className="container">
            <BreadCrumbs
                navigateToPreviousLink={false}
                activeBreadcrumbTitle="Account Year Events"
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
