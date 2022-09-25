import { plans } from './plans'

export const userHasSubscription = (stripeCustomer) => {
    return stripeCustomer.customer.subscriptionStart !== null
}

export const userSubscriptionValid = (stripeCustomer) => {
    if (!userHasSubscription(stripeCustomer)) {
        return false
    }

    const locale = Intl.DateTimeFormat().resolvedOptions().locale
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const currentDate = new Date(
        new Date()
            .toLocaleString(locale, {
                timeZone: timezone,
            })
            .split(',')[0],
    )

    const subscriptionEndDate = new Date(
        new Date(stripeCustomer.customer.subscriptionEnd)
            .toLocaleString(locale, {
                timeZone: timezone,
            })
            .split(',')[0],
    )

    console.log('currentDate', currentDate)
    console.log('timeStamp', new Date(1664089200 * 1000))
    console.log('subscriptionEndDate', subscriptionEndDate)

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
