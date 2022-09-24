export const plans = [
    {
        name: 'Level 1',
        weeklyEventsMax: 1,
        yearlyEventsMax: 1,
        price: '1.99',
        features: [
            '1 weekly event',
            '1 yearly event',
            'Add yearly event to calendar',
            'Save filter searches',
        ],
        description:
            'Geared towards the regular player that might throw a tournament every now and again. Or a player wanting to unlock the following',
        subscriptionPlanId: 'price_1LgioiKr4ipGkAARyXuLXnF4',
    },
    {
        name: 'Level 2',
        weeklyEventsMax: 3,
        yearlyEventsMax: 3,
        price: '2.99',
        features: ['3 weekly event', '3 yearly event', 'Plus everything from Level 1'],
        description:
            'Geared towards the regular player that might throw a tournament every now and again. Or a player wanting to unlock the following',
        subscriptionPlanId: 'price_1LgipIKr4ipGkAARuCv8fu2a',
    },
    {
        name: 'Level 3',
        weeklyEventsMax: 1000,
        yearlyEventsMax: 1000,
        price: '3.99',
        features: [
            'Unlimited weekly events',
            'Unlimited yearly events',
            'Plus everything from Level 2',
        ],
        description:
            'Geared towards the regular player that might throw a tournament every now and again. Or a player wanting to unlock the following',
        subscriptionPlanId: 'price_1LgipcKr4ipGkAAR3nDQNOw0',
    },
]

export const getApiUrl = () => {
    return '/api/v1/'
}

export const isSubscriptionValid = (stripeCustomer) => {
    if (
        stripeCustomer.customer.subscriptionEnd === null ||
        stripeCustomer.customer.subscriptionEnd === ''
    ) {
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
    ).toString()

    const subscriptionEndDate = new Date(
        new Date(stripeCustomer.customer.subscriptionEnd)
            .toLocaleString(locale, {
                timeZone: timezone,
            })
            .split(',')[0],
    ).toString()

    return currentDate < subscriptionEndDate
}

export const canUserSaveFilters = (stripeCustomer) => {
    return isSubscriptionValid(stripeCustomer)
}

export const canUserCreateEvents = (stripeCustomer, userCreatedEvents, type) => {
    if (type === 'weekly') {
        return (
            isSubscriptionValid(stripeCustomer) &&
            currentUserEventsCount(userCreatedEvents) <
                allowedUserEvents(stripeCustomer).weeklyEventsMax
        )
    }

    return (
        isSubscriptionValid(stripeCustomer) &&
        currentUserEventsCount(userCreatedEvents) <
            allowedUserEvents(stripeCustomer).yearlyEventsMax
    )
}

export const allowedUserEvents = (stripeCustomer) => {
    return plans
        .filter((plan) => plan.subscriptionPlanId === stripeCustomer.customer.subscriptionPlanId)
        .pop()
}

export const userHasEvents = (userEvents) => {
    return userEvents && userEvents.events.length > 0
}

export const currentUserEventsCount = (userEvents) => {
    return userEvents && userEvents.events.length
}
