import axios from 'axios'
import { toast } from 'react-toastify'
import {
    GET_USER_STRIPE_CUSTOMER_REQUEST,
    GET_USER_STRIPE_CUSTOMER_FAILURE,
    GET_USER_STRIPE_CUSTOMER_SUCCESS,
    RESET_STRIPE_CUSTOMER_REQUEST,
} from './stripeCustomerTypes'
import { getApiUrl } from '../../helpers'

export const getUserStripeCustomerRequest = () => ({
    type: GET_USER_STRIPE_CUSTOMER_REQUEST,
})

export const getUserStripeCustomerSuccess = (data) => ({
    type: GET_USER_STRIPE_CUSTOMER_SUCCESS,
    payload: data,
})

export const getUserStripeCustomerFailure = (error) => ({
    type: GET_USER_STRIPE_CUSTOMER_FAILURE,
    payload: error,
})

export const resetUserStripeCustomerRequest = () => ({
    type: RESET_STRIPE_CUSTOMER_REQUEST,
})

export const resetUserStripeCustomer = () => (dispatch) => {
    dispatch(resetUserStripeCustomerRequest())
}

export const getUserStripeCustomer = () => (dispatch, state) => {
    dispatch(getUserStripeCustomerRequest())

    axios
        .get(`${getApiUrl()}/stripe/get-user-stripe-customer`, {
            headers: {
                Authorization: `Bearer ${state().auth.token}`,
            },
        })
        .then((response) => {
            dispatch(getUserStripeCustomerSuccess(response.data))
        })
        .catch((error) => {
            const errorMsg = error.response.data.error
            dispatch(getUserStripeCustomerFailure(errorMsg))
            toast.error(errorMsg)
        })
}
