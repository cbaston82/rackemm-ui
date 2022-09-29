import { toast } from 'react-toastify'
import axios from 'axios'
import {
    UPLOAD_USER_MEDIA_FAILURE,
    UPLOAD_USER_MEDIA_REQUEST,
    UPLOAD_USER_MEDIA_SUCCESS,
    UPLOAD_USER_MEDIA_RESET,
    GET_USER_MEDIA_REQUEST,
    GET_USER_MEDIA_FAILURE,
    GET_USER_MEDIA_SUCCESS,
    DELETE_USER_MEDIA_FAILURE,
    DELETE_USER_MEDIA_REQUEST,
    DELETE_USER_MEDIA_SUCCESS,
} from './userMediaTypes'
import { getApiUrl } from '../../helpers'

export const uploadUserMediaRequest = () => ({
    type: UPLOAD_USER_MEDIA_REQUEST,
})

export const uploadUserMediaFailure = (error) => ({
    type: UPLOAD_USER_MEDIA_FAILURE,
    payload: error,
})

export const uploadUserMediaSuccess = (data) => ({
    type: UPLOAD_USER_MEDIA_SUCCESS,
    payload: data,
})

export const getUserMediaRequest = () => ({
    type: GET_USER_MEDIA_REQUEST,
})

export const getUserMediaFailure = (error) => ({
    type: GET_USER_MEDIA_FAILURE,
    payload: error,
})

export const getUserMediaSuccess = (data) => ({
    type: GET_USER_MEDIA_SUCCESS,
    payload: data,
})

export const uploadUserMediaReset = () => ({
    type: UPLOAD_USER_MEDIA_RESET,
})

export const deleteUserMediaRequest = () => ({
    type: DELETE_USER_MEDIA_REQUEST,
})

export const deleteUserMediaFailure = (error) => ({
    type: DELETE_USER_MEDIA_FAILURE,
    payload: error,
})

export const deleteUserMediaSuccess = (data) => ({
    type: DELETE_USER_MEDIA_SUCCESS,
    payload: data,
})

export const resetUserMedia = () => (dispatch) => {
    dispatch(uploadUserMediaReset())
}

export const getUserMedia = () => (dispatch, state) => {
    dispatch(getUserMediaRequest())

    axios
        .get(`${getApiUrl()}media/`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(getUserMediaSuccess(response.data))
        })
        .catch((error) => {
            const errorMsg = error.response.data.error
            dispatch(getUserMediaFailure(errorMsg))
        })
}

export const deleteUserMedia = (publicId) => (dispatch, state) => {
    dispatch(deleteUserMediaRequest())

    axios
        .delete(`${getApiUrl()}media/${publicId.split('/')[1]}`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(deleteUserMediaSuccess(publicId))
        })
        .catch((error) => {
            const errorMsg = error.response.data.error
            dispatch(deleteUserMediaFailure(errorMsg))
        })
}

export const uploadUserMedia = (media, fileName) => (dispatch, state) => {
    dispatch(uploadUserMediaRequest())

    axios
        .post(
            `${getApiUrl()}media/`,
            { data: media, fileName },
            {
                headers: {
                    Authorization: `Bearer ${state().auth.user.token}`,
                },
            },
        )
        .then((response) => {
            dispatch(uploadUserMediaSuccess(response.data))
            toast.success('Media uploaded successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.data.error
            dispatch(uploadUserMediaFailure(errorMsg))
            toast.error(errorMsg)
        })
}
