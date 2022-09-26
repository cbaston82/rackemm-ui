import { plans } from './plans'

export const userHasSubscription = (stripeCustomer) => {
    return stripeCustomer.customer.subscriptionStart !== null
}

export const userSubscriptionValid = (stripeCustomer) => {
    if (!userHasSubscription(stripeCustomer)) {
        return false
    }

    const currentDate = Date.now()
    const subscriptionEndDate = stripeCustomer.customer.subscriptionEnd * 1000

    return currentDate < subscriptionEndDate
}

export const userCanSaveFilters = (stripeCustomer) => {
    return userSubscriptionValid(stripeCustomer)
}

export const canUserSaveEventToCalendar = (stripeCustomer) => {
    return userSubscriptionValid(stripeCustomer)
}

export const userCanCreateEvents = (stripeCustomer, userCreatedEvents, type) => {
    if (type === 'weekly') {
        return (
            userSubscriptionValid(stripeCustomer) &&
            userEventsCount(userCreatedEvents) < userAllowedEvents(stripeCustomer).weeklyEventsMax
        )
    }

    return (
        userSubscriptionValid(stripeCustomer) &&
        userEventsCount(userCreatedEvents) < userAllowedEvents(stripeCustomer).yearlyEventsMax
    )
}

export const userAllowedEvents = (stripeCustomer) => {
    return plans
        .filter((plan) => plan.subscriptionPlanId === stripeCustomer.customer.subscriptionPlanId)
        .pop()
}

export const userHasEvents = (userEvents) => {
    return userEvents && userEvents.events.length > 0
}

export const userEventsCount = (userEvents) => {
    return userEvents && userEvents.events.length
}
