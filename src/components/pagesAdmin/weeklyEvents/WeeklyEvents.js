import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteUserEvent, getUserEvents } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import WeeklyEventsTable from './WeeklyEventsTable'
import BreadCrumbs from '../../BreadCrumbs'
import useDeleteSwalModal from '../../../hoook/useDeleteSwalModal'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasEvents } from '../../../helpers/config'
import useCanUserCreateEventsAlertMessage from '../../../hoook/useCanUserCreateEventsAlertMessage'
import useCanUserCreateEventsButton from '../../../hoook/useCanUserCreateEventsButton'

function WeeklyEvents({ getUserEvents, userEvents, stripeCustomer, deleteUserEvent }) {
    usePageTitle('- Account Weekly Events')
    const [canUserCreateEventsAlertMessage] = useCanUserCreateEventsAlertMessage()
    const [handleDelete] = useDeleteSwalModal(deleteUserEvent)
    const [canUserCreateEventButton] = useCanUserCreateEventsButton()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserEvents('weekly')
        setLoading(userEvents.loading)
    }, [getUserEvents])

    return (
        <div className="container">
            <BreadCrumbs
                navigateToPreviousLink={false}
                activeBreadcrumbTitle="Account Weekly Events"
            />
            {userEvents.loading || loading ? (
                <CustomLoader color="white" loaderMessage="fetching events" />
            ) : (
                <>
                    {userHasEvents(userEvents) ? (
                        <>
                            {canUserCreateEventButton(stripeCustomer, userEvents, 'weekly-events')}
                            <WeeklyEventsTable
                                events={userEvents.events}
                                handleDeleteEvent={handleDelete}
                            />
                        </>
                    ) : (
                        canUserCreateEventsAlertMessage(stripeCustomer, userEvents, 'weekly-events')
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

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvents)
