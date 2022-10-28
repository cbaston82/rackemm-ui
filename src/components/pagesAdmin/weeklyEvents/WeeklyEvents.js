import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { FaBars } from 'react-icons/fa'
import { deleteUserEvent, getUserEvents } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import WeeklyEventsTable from './WeeklyEventsTable'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasEvents } from '../../../helpers/config'
import useSubscriptionHooks from '../../../hoook/useSubscriptionHooks'
import useSwalModalHooks from '../../../hoook/useSwalModalsHooks'

function WeeklyEvents({ getUserEvents, userEvents, stripeCustomer, deleteUserEvent }) {
    const [loading, setLoading] = useState(true)
    usePageTitle('- Dashboard Weekly Events')
    const { handleDelete } = useSwalModalHooks(deleteUserEvent)
    const { canUserCreateEventButton, canUserCreateEventsAlertMessage } = useSubscriptionHooks()

    useEffect(() => {
        getUserEvents('weekly')
        setLoading(userEvents.loading)
    }, [getUserEvents])

    return (
        <div className="container">
            <a
                className="btn btn-secondary mb-5"
                data-bs-toggle="offcanvas"
                href="#offCanvasNavigation"
                role="button"
                aria-controls="offCanvasNavigation"
            >
                Menu <FaBars />
            </a>

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
