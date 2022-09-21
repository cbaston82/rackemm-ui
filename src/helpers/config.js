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
        features: ['Unlimited events', 'Unlimited events', 'Plus everything from Level 2'],
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
