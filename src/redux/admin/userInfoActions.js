import axios from 'axios'
import { toast } from 'react-toastify'
import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_FAILURE,
    GET_USER_INFO_SUCCESS,
    UPDATE_USER_INFO_REQUEST,
    UPDATE_USER_INFO_FAILURE,
    UPDATE_USER_INFO_SUCCESS,
    RESET_USER_INFO_REQUEST,
} from './userInfoTypes'
import { getApiUrl } from '../../helpers'

export const getUserInfoRequest = () => ({
    type: GET_USER_INFO_REQUEST,
})

export const getUserInfoFailure = (error) => ({
    type: GET_USER_INFO_FAILURE,
    payload: error,
})

export const getUserInfoSuccess = (data) => ({
    type: GET_USER_INFO_SUCCESS,
    payload: data,
})

export const updateUserInfoRequest = () => ({
    type: UPDATE_USER_INFO_REQUEST,
})

export const updateUserInfoFailure = (error) => ({
    type: UPDATE_USER_INFO_FAILURE,
    payload: error,
})

export const updateUserInfoSuccess = (data) => ({
    type: UPDATE_USER_INFO_SUCCESS,
    payload: data,
})

export const resetUserInfo = () => ({
    type: RESET_USER_INFO_REQUEST,
})

export const getUserInfo = () => (dispatch, state) => {
    dispatch(getUserInfoRequest())

    axios
        .get(`${getApiUrl()}/users/me`, {
            headers: {
                Authorization: `Bearer ${state().auth.token}`,
            },
        })
        .then((response) => {
            dispatch(getUserInfoSuccess(response.data.data))
        })
        .catch((error) => {
            const errorMsg = error.response.data.error.message
            dispatch(getUserInfoFailure(errorMsg))
        })
}

export const updateUserInfo = (userInfo) => (dispatch, state) => {
    dispatch(updateUserInfoRequest())

    axios
        .patch(`${getApiUrl()}/users/updateMe`, userInfo, {
            headers: {
                Authorization: `Bearer ${state().auth.token}`,
            },
        })
        .then((response) => {
            dispatch(updateUserInfoSuccess(response.data.data))
            toast.success('Information updated successfully')
        })
        .catch((error) => {
            const errorMsg = error.response.data.error.message
            dispatch(updateUserInfoFailure(errorMsg))
            toast.success('There was a problem')
        })
}
