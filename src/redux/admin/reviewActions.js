import axios from 'axios'
import { toast } from 'react-toastify'
import {
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_FAILURE,
    CREATE_REVIEW_REQUEST,
    UPDATE_REVIEW_FAILURE,
    UPDATE_REVIEW_REQUEST,
    UPDATE_REVIEW_SUCCESS,
    REVIEW_RESET,
} from './reviewTypes'
import { getApiUrl } from '../../helpers'
import { fetchSinglePublicEvent } from '../events/publicEventActions'

export const createReviewRequest = () => ({
    type: CREATE_REVIEW_REQUEST,
})

export const createReviewFailure = (error) => ({
    type: CREATE_REVIEW_FAILURE,
    payload: error,
})

export const createReviewSuccess = (data) => ({
    type: CREATE_REVIEW_SUCCESS,
    payload: data,
})

export const editReviewRequest = () => ({
    type: UPDATE_REVIEW_REQUEST,
})

export const editReviewFailure = (error) => ({
    type: UPDATE_REVIEW_FAILURE,
    payload: error,
})

export const editReviewSuccess = (data) => ({
    type: UPDATE_REVIEW_SUCCESS,
    payload: data,
})

export const resetReview = () => ({
    type: REVIEW_RESET,
})

export const createReview = (rating, review, eventId) => (dispatch, state) => {
    dispatch(createReviewRequest())

    axios
        .post(
            `${getApiUrl()}/events/${eventId}/reviews`,
            {
                review,
                rating,
            },
            {
                headers: {
                    Authorization: `Bearer ${state().auth.user.token}`,
                },
            },
        )
        .then((response) => {
            dispatch(createReviewSuccess(response.data.data))
            dispatch(fetchSinglePublicEvent(response.data.data.event))
            toast.success('Review was successfully created.')
        })
        .catch((error) => {
            const responseError = error.response.data.message
            createReviewFailure(responseError)
            toast.success(responseError)
        })
}

export const editReview = (rating, review, reviewId) => (dispatch, state) => {
    dispatch(editReviewRequest())

    axios
        .patch(
            `${getApiUrl()}/reviews/${reviewId}`,
            {
                review,
                rating,
            },
            {
                headers: {
                    Authorization: `Bearer ${state().auth.user.token}`,
                },
            },
        )
        .then((response) => {
            dispatch(editReviewSuccess(response.data.data))
            dispatch(fetchSinglePublicEvent(response.data.data.event))
            toast.success('Review was successfully updated.')
        })
        .catch((error) => {
            const responseError = error.response.data.message
            editReviewFailure(responseError)
            toast.success(responseError)
        })
}
