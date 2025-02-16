export const plans = [
    {
        name: 'Level 1',
        weeklyEventsMax: 1,
        specialEventsMax: 1,
        price: '1.99',
        features: ['1 weekly event', '1 Special event'],
        description:
            'Allows you to create 1 weekly and 1 special tournament. Plus all the basic features.',
        subscriptionPlanId: process.env.REACT_APP_STRIPE_PRICE_LEVEL_1,
    },
    {
        name: 'Level 2',
        weeklyEventsMax: 3,
        specialEventsMax: 3,
        price: '3.99',
        features: ['3 weekly event', '3 special event', 'Plus everything from Level 1'],
        description:
            'Allows you to create up to 3 weekly, and 3 special tournaments. Plus all the basic features.',
        subscriptionPlanId: process.env.REACT_APP_STRIPE_PRICE_LEVEL_2,
    },
    {
        name: 'Level 3',
        weeklyEventsMax: 100,
        specialEventsMax: 100,
        price: '5.99',
        features: [
            'Unlimited weekly events',
            'Unlimited special events',
            'Plus everything from Level 2',
        ],
        description:
            'Allows you to create unlimited weekly and unlimited special tournaments. Plus all the basic features.',
        subscriptionPlanId: process.env.REACT_APP_STRIPE_PRICE_LEVEL_3,
    },
]
