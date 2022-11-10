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
            'Allows you to create 1 weekly and 1 yearly tournament. Plus all the basic features.',
        subscriptionPlanId: 'price_1M2ePMKr4ipGkAARRBdd6UGe',
    },
    {
        name: 'Level 2',
        weeklyEventsMax: 3,
        yearlyEventsMax: 3,
        price: '2.99',
        features: ['3 weekly event', '3 yearly event', 'Plus everything from Level 1'],
        description:
            'Allows you to create up to 3 weekly, and 3 yearly tournaments. Plus all the basic features.',
        subscriptionPlanId: 'price_1M2eTfKr4ipGkAARLND8MZpv',
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
            'Allows you to create unlimited weekly and unlimited yearly tournaments. Plus all the basic features.',
        subscriptionPlanId: 'price_1M2eWKKr4ipGkAARrPIUdL82',
    },
]
