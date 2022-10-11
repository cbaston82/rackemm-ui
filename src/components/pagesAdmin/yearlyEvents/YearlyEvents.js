import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUserEvents, deleteUserEvent } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import YearlyEventsTable from './YearlyEventsTable'
import BreadCrumbs from '../../BreadCrumbs'
import useDeleteSwalModal from '../../../hoook/useDeleteSwalModal'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasEvents } from '../../../helpers/config'
import useCanUserCreateEventsAlertMessage from '../../../hoook/useCanUserCreateEventsAlertMessage'
import useCanUserCreateEventsButton from '../../../hoook/useCanUserCreateEventsButton'

function YearlyEvents({ getUserEvents, userEvents, deleteUserEvent, stripeCustomer }) {
    usePageTitle('- Account Yearly Event')
    const [canUserCreateEventsAlertMessage] = useCanUserCreateEventsAlertMessage()
    const [handleDelete] = useDeleteSwalModal(deleteUserEvent)
    const [canUserCreateEventButton] = useCanUserCreateEventsButton()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserEvents('yearly')
        setLoading(userEvents.loading)
    }, [getUserEvents])

    return (
        <div className="container">
            <BreadCrumbs
                navigateToPreviousLink={false}
                activeBreadcrumbTitle="Account Year Events"
            />
            {userEvents.loading || loading ? (
                <CustomLoader color="white" loaderMessage="Fetching events" />
            ) : (
                <>
                    {userHasEvents(userEvents) ? (
                        <>
                            {canUserCreateEventButton(stripeCustomer, userEvents, 'yearly-events')}
                            <YearlyEventsTable
                                events={userEvents.events}
                                handleDeleteEvent={handleDelete}
                            />
                        </>
                    ) : (
                        canUserCreateEventsAlertMessage(stripeCustomer, userEvents, 'yearly-events')
                    )}
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userEvents: state.userEvents,
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    getUserEvents: (type) => dispatch(getUserEvents(type)),
    deleteUserEvent: (eventId) => dispatch(deleteUserEvent(eventId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvents)
