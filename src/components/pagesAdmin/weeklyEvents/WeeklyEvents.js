import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserWeeklyEvents, deleteUserWeeklyEvent } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import WeeklyEventsTable from './WeeklyEventsTable'
import BreadCrumbs from '../../BreadCrumbs'
import useDeleteSwalModal from '../../../hoook/useDeleteSwalModal'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasEvents } from '../../../helpers/config'
import useCanUserCreateEventsAlertMessage from '../../../hoook/useCanUserCreateEventsAlertMessage'
import useCanUserCreateEventsButton from '../../../hoook/useCanUserCreateEventsButton'

function WeeklyEvents({
    getUserWeeklyEvents,
    userWeeklyEvents,
    stripeCustomer,
    deleteUserWeeklyEvent,
}) {
    usePageTitle('- Account Weekly Events')
    const [canUserCreateEventsAlertMessage] = useCanUserCreateEventsAlertMessage()
    const [handleDelete] = useDeleteSwalModal(deleteUserWeeklyEvent)
    const [canUserCreateEventButton] = useCanUserCreateEventsButton()

    useEffect(() => {
        getUserWeeklyEvents()
    }, [getUserWeeklyEvents])

    return (
        <div className="container">
            <BreadCrumbs
                navigateToPreviousLink={false}
                activeBreadcrumbTitle="Account Weekly Events"
            />
            {userWeeklyEvents.loading ? (
                <CustomLoader color="white" loaderMessage="fetching events" />
            ) : (
                <>
                    {userHasEvents(userWeeklyEvents) ? (
                        <>
                            {canUserCreateEventButton(stripeCustomer, userWeeklyEvents, 'weekly')}
                            <WeeklyEventsTable
                                events={userWeeklyEvents.events}
                                handleDeleteEvent={handleDelete}
                            />
                        </>
                    ) : (
                        canUserCreateEventsAlertMessage(
                            stripeCustomer,
                            userWeeklyEvents,
                            'weekly-events',
                        )
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
