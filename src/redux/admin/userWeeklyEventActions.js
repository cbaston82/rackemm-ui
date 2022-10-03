import axios from 'axios'
import { toast } from 'react-toastify'
import {
    CREATE_USER_WEEKLY_EVENT_REQUEST,
    CREATE_USER_WEEKLY_EVENT_SUCCESS,
    CREATE_USER_WEEKLY_EVENT_FAILURE,
    GET_USER_WEEKLY_EVENTS_REQUEST,
    GET_USER_WEEKLY_EVENTS_SUCCESS,
    GET_USER_WEEKLY_EVENTS_FAILURE,
    DELETE_USER_WEEKLY_EVENT_FAILURE,
    DELETE_USER_WEEKLY_EVENT_SUCCESS,
    DELETE_USER_WEEKLY_EVENT_REQUEST,
    UPDATE_USER_WEEKLY_EVENT_FAILURE,
    UPDATE_USER_WEEKLY_EVENT_SUCCESS,
    UPDATE_USER_WEEKLY_EVENT_REQUEST,
    RESET_USER_WEEKLY_EVENTS_REQUEST,
} from './userWeeklyEventTypes'
import { getApiUrl } from '../../helpers'

export const createWeeklyEventRequest = () => ({
    type: CREATE_USER_WEEKLY_EVENT_REQUEST,
})

export const createWeeklyEventSuccess = (event) => ({
    type: CREATE_USER_WEEKLY_EVENT_SUCCESS,
    payload: event,
})

export const createWeeklyEventFailure = (error) => ({
    type: CREATE_USER_WEEKLY_EVENT_FAILURE,
    payload: error,
})

export const getUserWeeklyEventsRequest = () => ({
    type: GET_USER_WEEKLY_EVENTS_REQUEST,
})

export const getUserWeeklyEventsSuccess = (events) => ({
    type: GET_USER_WEEKLY_EVENTS_SUCCESS,
    payload: events,
})

export const getUserWeeklyEventsFailure = (error) => ({
    type: GET_USER_WEEKLY_EVENTS_FAILURE,
    payload: error,
})

export const deleteUserWeeklyEventRequest = () => ({
    type: DELETE_USER_WEEKLY_EVENT_REQUEST,
})

export const deleteUserWeeklyEventSuccess = (event) => ({
    type: DELETE_USER_WEEKLY_EVENT_SUCCESS,
    payload: event,
})

export const deleteUserWeeklyEventFailure = (error) => ({
    type: DELETE_USER_WEEKLY_EVENT_FAILURE,
    payload: error,
})

export const updateUserWeeklyEventRequest = () => ({
    type: UPDATE_USER_WEEKLY_EVENT_REQUEST,
})

export const updateUserWeeklyEventSuccess = (event) => ({
    type: UPDATE_USER_WEEKLY_EVENT_SUCCESS,
    payload: event,
})

export const updateUserWeeklyEventFailure = (error) => ({
    type: UPDATE_USER_WEEKLY_EVENT_FAILURE,
    payload: error,
})

export const resetUserWeeklyEventsRequest = () => ({
    type: RESET_USER_WEEKLY_EVENTS_REQUEST,
})

export const resetUserWeeklyEvents = () => (dispatch) => {
    dispatch(resetUserWeeklyEventsRequest())
}

export const createWeeklyEvent = (event) => (dispatch, state) => {
    dispatch(createWeeklyEventRequest())

    axios
        .post(`${getApiUrl()}/events`, event, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(createWeeklyEventSuccess(response.data.data))
            toast.success(' successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.data.message
            dispatch(createWeeklyEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}

export const getUserWeeklyEvents = () => (dispatch, state) => {
    dispatch(getUserWeeklyEventsRequest())

    axios
        .get(`${getApiUrl()}/events/weekly-events`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(getUserWeeklyEventsSuccess(response.data.data))
        })
        .catch((error) => {
            const errorMsg = error.response.data.message
            dispatch(getUserWeeklyEventsFailure(errorMsg))
            toast.error(errorMsg)
        })
}
export const deleteUserWeeklyEvent = (eventId) => (dispatch, state) => {
    dispatch(deleteUserWeeklyEventRequest())

    axios
        .delete(`${getApiUrl()}/events/${eventId}`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(deleteUserWeeklyEventSuccess(response.data.data))
            toast.success('Event was deleted successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.message
            dispatch(deleteUserWeeklyEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}

export const updateUserWeeklyEvent = (event) => (dispatch, state) => {
    dispatch(updateUserWeeklyEventRequest())

    axios
        .patch(`${getApiUrl()}/events/${event._id}`, event, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(updateUserWeeklyEventSuccess(response.data.data))
            toast.success('Event was updated successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.message
            dispatch(updateUserWeeklyEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}
