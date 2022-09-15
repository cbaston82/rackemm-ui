import { getWeeklyEventsMax } from '../../helpers/config'

function EventsCreated({ createdEvents, stripeCustomer }) {
    const weeklyMaxEvents = getWeeklyEventsMax(stripeCustomer.customer.subscriptionPlanId)

    return (
        <p className="fst-italic fw-light">
            <span className="fw-bold">
                {createdEvents.events.length} of{' '}
                {weeklyMaxEvents !== 1000 ? weeklyMaxEvents : 'unlimited'}{' '}
            </span>{' '}
            weekly events created. <br />
        </p>
    )
}

export default EventsCreated
