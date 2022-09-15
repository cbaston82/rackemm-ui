export const plans = [
    {
        name: 'Level 1',
        weeklyEventsMax: 1,
        yearlyEventsMax: 1,
        price: '1.99',
        features: ['1 weekly event', '1 yearly event'],
        description:
            'Geared towards the regular player that might throw a tournament every now and again. Or a player wanting to unlock the following',
        subscriptionPlanId: 'price_1LgioiKr4ipGkAARyXuLXnF4',
    },
    {
        name: 'Level 2',
        weeklyEventsMax: 5,
        yearlyEventsMax: 5,
        price: '5.99',
        features: ['5 weekly event', '5 yearly event'],
        description:
            'Geared towards the regular player that might throw a tournament every now and again. Or a player wanting to unlock the following',
        subscriptionPlanId: 'price_1LgipIKr4ipGkAARuCv8fu2a',
    },
    {
        name: 'Level 3',
        weeklyEventsMax: 1000,
        yearlyEventsMax: 1000,
        price: '9.99',
        features: ['Unlimited events', 'Unlimited events'],
        description:
            'Geared towards the regular player that might throw a tournament every now and again. Or a player wanting to unlock the following',
        subscriptionPlanId: 'price_1LgipcKr4ipGkAAR3nDQNOw0',
    },
]
export const getApiUrl = () => {
    return '/api/v1/'
}

export const getSubscriptionPlanSettings = (subscriptionPlanId) => {
    return plans
        .filter((plan) => {
            return plan.subscriptionPlanId === subscriptionPlanId
        })
        .pop()
}
export const getWeeklyEventsMax = (subscriptionPlanId) => {
    return plans
        .filter((plan) => {
            return plan.subscriptionPlanId === subscriptionPlanId
        })
        .pop().weeklyEventsMax
}
export const canCreateWeeklyEvent = (subscriptionPlanId, createdEventsCount) => {
    return createdEventsCount < getWeeklyEventsMax(subscriptionPlanId)
}
