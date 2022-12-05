import { plans } from './plans'

export const userHasSubscription = (stripeCustomer) =>
    stripeCustomer.customer.subscriptionStart !== null

export const userHasValidSubscription = (stripeCustomer) => {
    if (!userHasSubscription(stripeCustomer)) {
        return false
    }

    const currentDate = Date.now()
    const subscriptionEndDate = stripeCustomer.customer.subscriptionEnd * 1000

    return currentDate < subscriptionEndDate
}

export const userIsLoggedIn = (auth) => auth.token

export const getUserId = (userInfo) => userInfo.me._id

export const userAllowedEvents = (stripeCustomer) =>
    plans
        .filter((plan) => plan.subscriptionPlanId === stripeCustomer.customer.subscriptionPlanId)
        .pop()

export const userHasEvents = (userEvents) => userEvents && userEvents.events.length > 0

export const userEventsCount = (userEvents) => userEvents && userEvents.events.length

export const userCanCreateEvents = (stripeCustomer, userCreatedEvents, type) => {
    if (type === 'weekly') {
        return (
            userHasValidSubscription(stripeCustomer) &&
            userEventsCount(userCreatedEvents) < userAllowedEvents(stripeCustomer).weeklyEventsMax
        )
    }

    return (
        userHasValidSubscription(stripeCustomer) &&
        userEventsCount(userCreatedEvents) < userAllowedEvents(stripeCustomer).yearlyEventsMax
    )
}
