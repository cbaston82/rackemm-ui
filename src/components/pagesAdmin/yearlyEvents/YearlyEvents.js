import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserYearlyEvents, deleteUserYearlyEvent } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import YearlyEventsTable from './YearlyEventsTable'
import BreadCrumbs from '../../BreadCrumbs'
import useDeleteSwalModal from '../../../hoook/useDeleteSwalModal'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasEvents } from '../../../helpers/config'
import useCanUserCreateEventsAlertMessage from '../../../hoook/useCanUserCreateEventsAlertMessage'
import useCanUserCreateEventsButton from '../../../hoook/useCanUserCreateEventsButton'

function YearlyEvents({
    getUserYearlyEvents,
    userYearlyEvents,
    deleteUserYearlyEvent,
    stripeCustomer,
}) {
    usePageTitle('- Account Yearly Event')
    const [canUserCreateEventsAlertMessage] = useCanUserCreateEventsAlertMessage()
    const [handleDeleteEvent] = useDeleteSwalModal(deleteUserYearlyEvent)
    const [canUserCreateEventButton] = useCanUserCreateEventsButton()

    useEffect(() => {
        getUserYearlyEvents()
    }, [getUserYearlyEvents])

    return (
        <div className="container">
            <BreadCrumbs
                navigateToPreviousLink={false}
                activeBreadcrumbTitle="Account Year Events"
            />
            {userYearlyEvents.loading ? (
                <CustomLoader color="white" loaderMessage="Fetching events" />
            ) : (
                <>
                    {userHasEvents(userYearlyEvents) ? (
                        <>
                            {canUserCreateEventButton(
                                stripeCustomer,
                                userYearlyEvents,
                                'yearly-events',
                            )}
                            <YearlyEventsTable
                                events={userYearlyEvents.events}
                                handleDeleteEvent={handleDeleteEvent}
                            />
                        </>
                    ) : (
                        canUserCreateEventsAlertMessage(
                            stripeCustomer,
                            userYearlyEvents,
                            'yearly-events',
                        )
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
