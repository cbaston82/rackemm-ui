import axios from 'axios'
import { getApiUrl } from '../../helpers'
import {
    FETCH_PUBLIC_EVENTS_REQUEST,
    FETCH_PUBLIC_EVENTS_SUCCESS,
    FETCH_PUBLIC_EVENTS_FAILURE,
    FETCH_SINGLE_PUBLIC_EVENT_SUCCESS,
    FETCH_SINGLE_PUBLIC_EVENT_REQUEST,
    FETCH_SINGLE_PUBLIC_EVENT_FAILURE,
} from './publicEventTypes'

export const publicEventsRequest = () => ({
    type: FETCH_PUBLIC_EVENTS_REQUEST,
})

export const publicEventsSuccess = (events) => ({
    type: FETCH_PUBLIC_EVENTS_SUCCESS,
    payload: events,
})

export const publicEventsFailure = (error) => ({
    type: FETCH_PUBLIC_EVENTS_FAILURE,
    payload: error,
})

export const fetchSinglePublicEventRequest = () => ({
    type: FETCH_SINGLE_PUBLIC_EVENT_REQUEST,
})

export const fetchSinglePublicEventSuccess = (events) => ({
    type: FETCH_SINGLE_PUBLIC_EVENT_SUCCESS,
    payload: events,
})

export const fetchSinglePublicEventFailure = (error) => ({
    type: FETCH_SINGLE_PUBLIC_EVENT_FAILURE,
    payload: error,
})

export const getAllPublicEvents = (type) => (dispatch) => {
    dispatch(publicEventsRequest())

    axios
        .get(`${getApiUrl()}/events/public?type=${type}`)
        .then((response) => {
            dispatch(publicEventsSuccess(response.data.data))
        })
        .catch((error) => {
            const errorMsg = error.response.data.message
            dispatch(publicEventsFailure(errorMsg))
        })
}

export const fetchSinglePublicEvent = (id) => (dispatch) => {
    dispatch(fetchSinglePublicEventRequest())

    axios
        .get(`${getApiUrl()}/events/public/${id}`)
        .then((response) => {
            dispatch(fetchSinglePublicEventSuccess(response.data.data))
        })
        .catch((error) => {
            const errorMsg = error.response.data.message
            dispatch(fetchSinglePublicEventFailure(errorMsg))
        })
}
