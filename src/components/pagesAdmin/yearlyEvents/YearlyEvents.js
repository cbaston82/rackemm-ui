import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { FaBars } from 'react-icons/fa'
import { getUserEvents, deleteUserEvent } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import YearlyEventsTable from './YearlyEventsTable'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasEvents } from '../../../helpers/config'
import useSubscriptionHooks from '../../../hoook/useSubscriptionHooks'
import useSwalModalHooks from '../../../hoook/useSwalModalsHooks'

function YearlyEvents({ getUserEvents, userEvents, deleteUserEvent, stripeCustomer }) {
    usePageTitle('- Dashboard Yearly Event')
    const { handleDelete } = useSwalModalHooks(deleteUserEvent)
    const { canUserCreateEventButton, canUserCreateEventsAlertMessage } = useSubscriptionHooks()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserEvents('yearly')
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
