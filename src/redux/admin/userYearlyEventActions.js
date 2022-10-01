import axios from 'axios'
import { toast } from 'react-toastify'
import { millisecondsToSeconds } from 'date-fns'
import { getApiUrl, getDateTimeFromTimeString } from '../../helpers'
import {
    CREATE_USER_YEARLY_EVENT_REQUEST,
    CREATE_USER_YEARLY_EVENT_SUCCESS,
    CREATE_USER_YEARLY_EVENT_FAILURE,
    GET_USER_YEARLY_EVENTS_REQUEST,
    GET_USER_YEARLY_EVENTS_SUCCESS,
    GET_USER_YEARLY_EVENTS_FAILURE,
    DELETE_USER_YEARLY_EVENT_FAILURE,
    DELETE_USER_YEARLY_EVENT_SUCCESS,
    DELETE_USER_YEARLY_EVENT_REQUEST,
    UPDATE_USER_YEARLY_EVENT_FAILURE,
    UPDATE_USER_YEARLY_EVENT_SUCCESS,
    UPDATE_USER_YEARLY_EVENT_REQUEST,
    GET_USER_YEARLY_EVENT_SUCCESS,
    GET_USER_YEARLY_EVENT_FAILURE,
    GET_USER_YEARLY_EVENT_REQUEST,
    RESET_USER_YEARLY_EVENTS_REQUEST,
} from './userYearlyEventTypes'

export const createYearlyEventRequest = () => ({
    type: CREATE_USER_YEARLY_EVENT_REQUEST,
})

export const createYearlyEventSuccess = (event) => ({
    type: CREATE_USER_YEARLY_EVENT_SUCCESS,
    payload: event,
})

export const createYearlyEventFailure = (error) => ({
    type: CREATE_USER_YEARLY_EVENT_FAILURE,
    payload: error,
})

export const getUserYearlyEventsRequest = () => ({
    type: GET_USER_YEARLY_EVENTS_REQUEST,
})

export const getUserYearlyEventsSuccess = (events) => ({
    type: GET_USER_YEARLY_EVENTS_SUCCESS,
    payload: events,
})

export const getUserYearlyEventsFailure = (error) => ({
    type: GET_USER_YEARLY_EVENTS_FAILURE,
    payload: error,
})

export const deleteUserYearlyEventRequest = () => ({
    type: DELETE_USER_YEARLY_EVENT_REQUEST,
})

export const deleteUserYearlyEventSuccess = (event) => ({
    type: DELETE_USER_YEARLY_EVENT_SUCCESS,
    payload: event,
})

export const deleteUserYearlyEventFailure = (error) => ({
    type: DELETE_USER_YEARLY_EVENT_FAILURE,
    payload: error,
})

export const updateUserYearlyEventRequest = () => ({
    type: UPDATE_USER_YEARLY_EVENT_REQUEST,
})

export const updateUserYearlyEventSuccess = (event) => ({
    type: UPDATE_USER_YEARLY_EVENT_SUCCESS,
    payload: event,
})

export const updateUserYearlyEventFailure = (error) => ({
    type: UPDATE_USER_YEARLY_EVENT_FAILURE,
    payload: error,
})

export const getUserYearlyEventRequest = () => ({
    type: GET_USER_YEARLY_EVENT_REQUEST,
})

export const getUserYearlyEventSuccess = (event) => ({
    type: GET_USER_YEARLY_EVENT_SUCCESS,
    payload: event,
})

export const getUserYearlyEventFailure = (error) => ({
    type: GET_USER_YEARLY_EVENT_FAILURE,
    payload: error,
})

export const resetUserYearlyEventsRequest = () => ({
    type: RESET_USER_YEARLY_EVENTS_REQUEST,
})

export const resetUserYearlyEvents = () => (dispatch) => {
    dispatch(resetUserYearlyEventsRequest())
}

export const createYearlyEvent = (event) => (dispatch, state) => {
    dispatch(createYearlyEventRequest())
    const startTime = millisecondsToSeconds(new Date(event.startTime).getTime())
    const endTime = millisecondsToSeconds(new Date(event.endTime).getTime())

    axios
        .post(
            `${getApiUrl()}/yearly-events`,
            { ...event, startTime, endTime },
            {
                headers: {
                    Authorization: `Bearer ${state().auth.user.token}`,
                },
            },
        )
        .then((response) => {
            dispatch(createYearlyEventSuccess(response.data))
            toast.success('Event created successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.data.error
            dispatch(createYearlyEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}

export const getUserYearlyEvents = () => (dispatch, state) => {
    dispatch(getUserYearlyEventsRequest())

    axios
        .get(`${getApiUrl()}/yearly-events`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            const events = response.data.map((event) => ({
                ...event,
                startTime: getDateTimeFromTimeString(event.startTime),
                endTime: getDateTimeFromTimeString(event.endTime),
            }))

            dispatch(getUserYearlyEventsSuccess(events))
        })
        .catch((error) => {
            const errorMsg = error.response.statusText
            dispatch(getUserYearlyEventsFailure(errorMsg))
            toast.error(errorMsg)
        })
}

export const deleteUserYearlyEvent = (eventId) => (dispatch, state) => {
    dispatch(deleteUserYearlyEventRequest())

    axios
        .delete(`${getApiUrl()}/yearly-events/${eventId}`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(deleteUserYearlyEventSuccess(response.data))
            toast.success('Event was deleted successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.statusText
            dispatch(deleteUserYearlyEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}

export const updateUserYearlyEvent = (event) => (dispatch, state) => {
    dispatch(updateUserYearlyEventRequest())
    const startTime = millisecondsToSeconds(new Date(event.startTime).getTime())
    const endTime = millisecondsToSeconds(new Date(event.endTime).getTime())

    axios
        .patch(
            `${getApiUrl()}/yearly-events/${event._id}`,
            { ...event, startTime, endTime },
            {
                headers: {
                    Authorization: `Bearer ${state().auth.user.token}`,
                },
            },
        )
        .then((response) => {
            dispatch(updateUserYearlyEventSuccess(response.data))
            toast.success('Event was updated successfully!')
        })
        .catch((error) => {
            const errorMsg = error.response.statusText
            dispatch(updateUserYearlyEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}

export const getUserYearlyEvent = (id) => (dispatch, state) => {
    dispatch(getUserYearlyEventRequest())

    axios
        .get(`${getApiUrl()}/yearly-events/${id}`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(
                getUserYearlyEventSuccess({
                    ...response.data,
                    startTime: getDateTimeFromTimeString(response.data.startTime),
                    endTime: getDateTimeFromTimeString(response.data.endTime),
                }),
            )
        })
        .catch((error) => {
            const errorMsg = error.response.data.error
            dispatch(getUserYearlyEventFailure(errorMsg))
            toast.error(errorMsg)
        })
}
