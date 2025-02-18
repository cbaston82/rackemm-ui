import axios from 'axios'
import { toast } from 'react-toastify'

import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_REQUEST,
} from './authTypes'
import { getUserStripeCustomer, resetUserStripeCustomer } from '../admin/stripeCustomerActions'
import { resetUserEvents } from '../admin/eventActions'
import { resetUserMedia } from '../admin/userMediaActions'
import { resetFilters } from '../admin/filterActions'
import { getApiUrl } from '../../helpers'
import { resetReview } from '../admin/reviewActions'
import { getUserInfo, resetUserInfo } from '../admin/userInfoActions'

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
        .post(`${getApiUrl()}/auth/login`, user)
        .then((response) => {
            toast.success('You are now logged in')
            dispatch(loginUserSuccess(response.data.data.token))
            dispatch(getUserInfo())
            dispatch(getUserStripeCustomer())
        })
        .catch((error) => {
            dispatch(loginUserFailure(error.response.data.message))
            toast.error(error.response.data.message)
        })
}

export const signupUser = (user) => (dispatch) => {
    dispatch(loginUserRequest())

    axios
        .post(`${getApiUrl()}/auth/signup`, user)
        .then((response) => {
            dispatch(loginUserSuccess(null))
            toast.success('Successfully registered. Please login.')
            setTimeout(() => {
                window.location.href = '/login'
            }, 2000)
        })
        .catch((error) => {
            dispatch(loginUserFailure(error.response.data.message))
            toast.error(error.response.data.message)
        })
}

export const updatePassword = (password) => (dispatch, state) => {
    dispatch(loginUserRequest())

    axios
        .patch(`${getApiUrl()}/auth/update-password`, password, {
            headers: {
                Authorization: `Bearer ${state().auth.token}`,
            },
        })
        .then((response) => {
            dispatch(loginUserSuccess(response.data.data))
            toast.success('You are now logged in')
        })
        .catch((error) => {
            dispatch(loginUserFailure(error.response.data.message))
            toast.error(error.response.data.message)
        })
}

export const resetPassword = (token, passwordForm) => (dispatch) => {
    dispatch(loginUserRequest())

    axios
        .patch(`${getApiUrl()}/auth/reset-password/${token}`, passwordForm)
        .then((response) => {
            dispatch(loginUserSuccess(response.data.token))
            dispatch(getUserInfo())
            dispatch(getUserStripeCustomer())
            toast.success('You are now logged in')
            setTimeout(() => {
                window.location.href = '/'
            }, 1000)
        })
        .catch((error) => {
            dispatch(loginUserFailure(error.response.data.message))
            toast.error(error.response.data.message)
        })
}

export const logoutUser = () => (dispatch) => {
    dispatch(logoutUserRequest())
    dispatch(resetUserStripeCustomer())
    dispatch(resetUserEvents())
    dispatch(resetUserMedia())
    dispatch(resetFilters())
    dispatch(resetReview())
    dispatch(resetUserInfo())
    localStorage.setItem('state', '')
}
