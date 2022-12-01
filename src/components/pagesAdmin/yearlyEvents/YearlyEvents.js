import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getUserEvents, deleteUserEvent } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import YearlyEventsTable from './YearlyEventsTable'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasEvents, userHasSubscription } from '../../../helpers/config'
import useSubscriptionHooks from '../../../hoook/useSubscriptionHooks'
import useSwalModalHooks from '../../../hoook/useSwalModalsHooks'
import SideMenu from '../../structure/SideMenu'

function YearlyEvents({ getUserEvents, userEvents, deleteUserEvent, stripeCustomer }) {
    usePageTitle('- Yearly Event')
    const { handleDelete } = useSwalModalHooks(deleteUserEvent)
    const { canUserCreateEventButton, canUserCreateEventsAlertMessage } = useSubscriptionHooks()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserEvents('yearly')
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
            <BreadCrumbs navigateToPreviousLink={false} activeBreadcrumbTitle="Yearly Events" />
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
