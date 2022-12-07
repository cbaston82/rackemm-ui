import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getUserEvents, deleteUserEvent } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import SpecialEventsTable from './SpecialEventsTable'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasEvents, userHasSubscription } from '../../../helpers/config'
import useSubscriptionHooks from '../../../hoook/useSubscriptionHooks'
import useSwalModalHooks from '../../../hoook/useSwalModalsHooks'
import SideMenu from '../../structure/SideMenu'

function SpecialEvents({ getUserEvents, userEvents, deleteUserEvent, stripeCustomer }) {
    usePageTitle('- Special Event')
    const { handleDelete } = useSwalModalHooks(deleteUserEvent)
    const { canUserCreateEventButton, canUserCreateEventsAlertMessage } = useSubscriptionHooks()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserEvents('special')
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
            <BreadCrumbs navigateToPreviousLink={false} activeBreadcrumbTitle="Special Events" />
            {userEvents.loading || loading ? (
                <CustomLoader color="white" loaderMessage="Fetching events" />
            ) : (
                <>
                    {userHasEvents(userEvents) ? (
                        <>
                            {canUserCreateEventButton(stripeCustomer, userEvents, 'special-events')}
                            <SpecialEventsTable
                                events={userEvents.events}
                                handleDeleteEvent={handleDelete}
                            />
                        </>
                    ) : (
                        canUserCreateEventsAlertMessage(
                            stripeCustomer,
                            userEvents,
                            'special-events',
                        )
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

export default connect(mapStateToProps, mapDispatchToProps)(SpecialEvents)
