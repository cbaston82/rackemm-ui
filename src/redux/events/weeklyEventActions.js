import axios from 'axios'
import { getApiUrl } from '../../helpers'
import {
    FETCH_ALL_WEEKLY_EVENTS_REQUEST,
    FETCH_ALL_WEEKLY_EVENTS_SUCCESS,
    FETCH_ALL_WEEKLY_EVENTS_FAILURE,
    FETCH_SINGLE_WEEKLY_EVENT_SUCCESS,
    FETCH_SINGLE_WEEKLY_EVENT_REQUEST,
    FETCH_SINGLE_WEEKLY_EVENT_FAILURE,
} from './weeklyEventTypes'

export const weeklyEventsRequest = () => ({
    type: FETCH_ALL_WEEKLY_EVENTS_REQUEST,
})

export const weeklyEventsSuccess = (events) => ({
    type: FETCH_ALL_WEEKLY_EVENTS_SUCCESS,
    payload: events,
})

export const weeklyEventsFailure = (error) => ({
    type: FETCH_ALL_WEEKLY_EVENTS_FAILURE,
    payload: error,
})

export const fetchSingleWeeklyEventRequest = () => ({
    type: FETCH_SINGLE_WEEKLY_EVENT_REQUEST,
})

export const fetchSingleWeeklyEventSuccess = (events) => ({
    type: FETCH_SINGLE_WEEKLY_EVENT_SUCCESS,
    payload: events,
})

export const fetchSingleWeeklyEventFailure = (error) => ({
    type: FETCH_SINGLE_WEEKLY_EVENT_FAILURE,
    payload: error,
})

export const getAllWeeklyEvents = () => (dispatch) => {
    dispatch(weeklyEventsRequest())

    axios
        .get(`${getApiUrl()}/events/weekly-events/public`)
        .then((response) => {
            dispatch(weeklyEventsSuccess(response.data.data))
        })
        .catch((error) => {
            const errorMsg = error.response.data.message
            dispatch(weeklyEventsFailure(errorMsg))
        })
}

export const fetchSingleWeeklyEvent = (id) => (dispatch) => {
    dispatch(fetchSingleWeeklyEventRequest())

    axios
        .get(`${getApiUrl()}/events/public/${id}`)
        .then((response) => {
            dispatch(fetchSingleWeeklyEventSuccess(response.data.data))
        })
        .catch((error) => {
            const errorMsg = error.response.data.message
            dispatch(fetchSingleWeeklyEventFailure(errorMsg))
        })
}
