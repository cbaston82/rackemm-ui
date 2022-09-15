import {
    GET_USER_STRIPE_CUSTOMER_SUCCESS,
    GET_USER_STRIPE_CUSTOMER_REQUEST,
    GET_USER_STRIPE_CUSTOMER_FAILURE,
    RESET_STRIPE_CUSTOMER_REQUEST,
} from './stripeCustomerTypes'

const initialState = {
    loading: false,
    customer: {},
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_STRIPE_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_STRIPE_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                customer: action.payload,
                error: '',
            }
        case GET_USER_STRIPE_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case RESET_STRIPE_CUSTOMER_REQUEST:
            return {
                ...initialState,
            }
        default:
            return state
    }
}

export default reducer
