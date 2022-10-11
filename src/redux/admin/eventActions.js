import axios from 'axios'
import { toast } from 'react-toastify'
import {
    CREATE_USER_EVENT_REQUEST,
    CREATE_USER_EVENT_SUCCESS,
    CREATE_USER_EVENT_FAILURE,
    GET_USER_EVENTS_REQUEST,
    GET_USER_EVENTS_SUCCESS,
    GET_USER_EVENTS_FAILURE,
    DELETE_USER_EVENT_FAILURE,
    DELETE_USER_EVENT_SUCCESS,
    DELETE_USER_EVENT_REQUEST,
    UPDATE_USER_EVENT_FAILURE,
    UPDATE_USER_EVENT_SUCCESS,
    UPDATE_USER_EVENT_REQUEST,
    RESET_USER_EVENTS_REQUEST,
} from './eventTypes'
import { getApiUrl } from '../../helpers'

export const createEventRequest = () => ({
    type: CREATE_USER_EVENT_REQUEST,
})

export const createEventSuccess = (event) => ({
    type: CREATE_USER_EVENT_SUCCESS,
    payload: event,
})

export const createEventFailure = (error) => ({
    type: CREATE_USER_EVENT_FAILURE,
    payload: error,
})

export const getUserEventsRequest = () => ({
    type: GET_USER_EVENTS_REQUEST,
})

export const getUserEventsSuccess = (events) => ({
    type: GET_USER_EVENTS_SUCCESS,
    payload: events,
})

export const getUserEventsFailure = (error) => ({
    type: GET_USER_EVENTS_FAILURE,
    payload: error,
})

export const deleteUserEventRequest = () => ({
    type: DELETE_USER_EVENT_REQUEST,
})

export const deleteUserEventSuccess = (event) => ({
    type: DELETE_USER_EVENT_SUCCESS,
    payload: event,
})

export const deleteUserEventFailure = (error) => ({
    type: DELETE_USER_EVENT_FAILURE,
    payload: error,
})

export const updateUserEventRequest = () => ({
    type: UPDATE_USER_EVENT_REQUEST,
})

export const updateUserEventSuccess = (event) => ({
    type: UPDATE_USER_EVENT_SUCCESS,
    payload: event,
})

export const updateUserEventFailure = (error) => ({
    type: UPDATE_USER_EVENT_FAILURE,
    payload: error,
})

export const resetUserEventsRequest = () => ({
    type: RESET_USER_EVENTS_REQUEST,
})

export const resetUserEvents = () => (dispatch) => {
    dispatch(resetUserEventsRequest())
}

export const createUserEvent = (event) => (dispatch, state) => {
    dispatch(createEventRequest())

    axios
        .post(`${getApiUrl()}/events`, event, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(createEventSuccess(response.data.data))
            toast.success(' successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.data.message
            dispatch(createEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}

export const getUserEvents = (type) => (dispatch, state) => {
    dispatch(getUserEventsRequest())

    axios
        .get(`${getApiUrl()}/events?type=${type}`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(getUserEventsSuccess(response.data.data))
        })
        .catch((error) => {
            const errorMsg = error.response.data.message
            dispatch(getUserEventsFailure(errorMsg))
            toast.error(errorMsg)
        })
}

export const deleteUserEvent = (eventId) => (dispatch, state) => {
    dispatch(deleteUserEventRequest())

    axios
        .delete(`${getApiUrl()}/events/${eventId}`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(deleteUserEventSuccess(response.data.data))
            toast.success('Event was deleted successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.message
            dispatch(deleteUserEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}

export const updateUserEvent = (event) => (dispatch, state) => {
    dispatch(updateUserEventRequest())

    axios
        .patch(`${getApiUrl()}/events/${event._id}`, event, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(updateUserEventSuccess(response.data.data))
            toast.success('Event was updated successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.message
            dispatch(updateUserEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}
