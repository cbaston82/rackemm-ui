import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { deleteUserEvent, getUserEvents } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import WeeklyEventsTable from './WeeklyEventsTable'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasEvents, userHasSubscription } from '../../../helpers/config'
import useSubscriptionHooks from '../../../hoook/useSubscriptionHooks'
import useSwalModalHooks from '../../../hoook/useSwalModalsHooks'
import SideMenu from '../../structure/SideMenu'

function WeeklyEvents({ getUserEvents, userEvents, stripeCustomer, deleteUserEvent }) {
    const [loading, setLoading] = useState(true)
    usePageTitle('- Weekly Events')
    const { handleDelete } = useSwalModalHooks(deleteUserEvent)
    const { canUserCreateEventButton, canUserCreateEventsAlertMessage } = useSubscriptionHooks()

    useEffect(() => {
        getUserEvents('weekly')
        setLoading(userEvents.loading)
    }, [getUserEvents])

    const location = useLocation()

    return (
        <div className="container">
            <SideMenu
                className="mt-5"
                userIsSubscribed={userHasSubscription(stripeCustomer)}
                location={location.pathname}
            />

            <BreadCrumbs navigateToPreviousLink={false} activeBreadcrumbTitle="Weekly Events" />
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
