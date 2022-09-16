import axios from 'axios'
import { toast } from 'react-toastify'

import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_REQUEST,
} from './authTypes'
import { getUserStripeCustomer, resetUserStripeCustomer } from '../admin/stripeCustomerActions'
import { resetUserWeeklyEvents } from '../admin/userWeeklyEventActions'
import { resetUserYearlyEvents } from '../admin/userYearlyEventActions'
import { resetUserMedia } from '../admin/userMediaActions'

export const loginUserRequest = () => ({
    type: LOGIN_USER_REQUEST,
})

export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
})

export const loginUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error,
})

export const logoutUserRequest = () => ({
    type: LOGOUT_USER_REQUEST,
})

export const loginUser = (user) => (dispatch) => {
    dispatch(loginUserRequest())

    axios
        .post('/api/v1/user/login', user)
        .then((response) => {
            toast.success('You are now logged in')
            dispatch(loginUserSuccess(response.data))
            dispatch(getUserStripeCustomer())
        })
        .catch((error) => {
            dispatch(loginUserFailure(error.response.data.error))
            toast.error(error.response.data.error)
        })
}

export const signupUser = (user) => (dispatch) => {
    dispatch(loginUserRequest())

    axios
        .post('/api/v1/user/signup ', user)
        .then((response) => {
            dispatch(loginUserSuccess(response.data))
            toast.success('You are now logged in')
        })
        .catch((error) => {
            dispatch(loginUserFailure(error.response.data.error))
            toast.error(error.response.data.error)
        })
}

export const logoutUser = () => (dispatch) => {
    dispatch(logoutUserRequest())
    dispatch(resetUserStripeCustomer())
    dispatch(resetUserWeeklyEvents())
    dispatch(resetUserYearlyEvents())
    dispatch(resetUserMedia())
    localStorage.setItem('state', '')
}
