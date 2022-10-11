import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import publicEventsReducer from './events/publicEventsReducer'
import eventsReducer from './admin/eventsReducer'
import stripeCustomerReducer from './admin/stripeCustomerReducer'
import userMedia from './admin/userMediaReducer'
import filtersReducer from './admin/filtersReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    userEvents: eventsReducer,
    publicEvents: publicEventsReducer,
    stripeCustomer: stripeCustomerReducer,
    userMedia: userMedia,
    savedFilters: filtersReducer,
})

export default rootReducer
