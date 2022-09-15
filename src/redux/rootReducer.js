import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import weeklyEventsReducer from './events/weeklyEventsReducer'
import yearlyEventsReducer from './events/yearlyEventsReducer'
import userWeeklyEventsReducer from './admin/userWeeklyEventsReducer'
import userYearlyEventsReducer from './admin/userYearlyEventsReducer'
import stripeCustomerReducer from './admin/stripeCustomerReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    userWeeklyEvents: userWeeklyEventsReducer,
    userYearlyEvents: userYearlyEventsReducer,
    allWeeklyEvents: weeklyEventsReducer,
    allYearlyEvents: yearlyEventsReducer,
    stripeCustomer: stripeCustomerReducer,
})

export default rootReducer
