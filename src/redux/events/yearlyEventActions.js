import axios from 'axios'
import { getApiUrl, getDateTimeFromTimeString } from '../../helpers'
import {
    FETCH_ALL_YEARLY_EVENTS_REQUEST,
    FETCH_ALL_YEARLY_EVENTS_SUCCESS,
    FETCH_ALL_YEARLY_EVENTS_FAILURE,
    FETCH_SINGLE_YEARLY_EVENT_SUCCESS,
    FETCH_SINGLE_YEARLY_EVENT_REQUEST,
    FETCH_SINGLE_YEARLY_EVENT_FAILURE,
} from './yearlyEventTypes'

export const yearlyEventsRequest = () => ({
    type: FETCH_ALL_YEARLY_EVENTS_REQUEST,
})

export const yearlyEventsSuccess = (events) => ({
    type: FETCH_ALL_YEARLY_EVENTS_SUCCESS,
    payload: events,
})

export const yearlyEventsFailure = (error) => ({
    type: FETCH_ALL_YEARLY_EVENTS_FAILURE,
    payload: error,
})

export const fetchSingleYearlyEventRequest = () => ({
    type: FETCH_SINGLE_YEARLY_EVENT_REQUEST,
})

export const fetchSingleYearlyEventSuccess = (events) => ({
    type: FETCH_SINGLE_YEARLY_EVENT_SUCCESS,
    payload: events,
})

export const fetchSingleYearlyEventFailure = (error) => ({
    type: FETCH_SINGLE_YEARLY_EVENT_FAILURE,
    payload: error,
})

export const getAllYearlyEvents = () => (dispatch) => {
    dispatch(yearlyEventsRequest())

    axios
        .get(`${getApiUrl()}/events/yearly-events/public`)
        .then((response) => {
            const events = response.data.map((event) => ({
                ...event,
                startTime: getDateTimeFromTimeString(event.startTime),
                endTime: getDateTimeFromTimeString(event.endTime),
            }))
            dispatch(yearlyEventsSuccess(events))
        })
        .catch((error) => {
            const errorMsg = error.message
            dispatch(yearlyEventsFailure(errorMsg))
        })
}

export const fetchSingleYearlyEvent = (id) => (dispatch) => {
    dispatch(fetchSingleYearlyEventRequest())

    axios
        .get(`${getApiUrl()}events/yearly-events/public/${id}`)
        .then((response) => {
            dispatch(
                fetchSingleYearlyEventSuccess({
                    ...response.data.pop(),
                    startTime: getDateTimeFromTimeString(response.data.startTime),
                    endTime: getDateTimeFromTimeString(response.data.endTime),
                }),
            )
        })
        .catch((error) => {
            const errorMsg = error.response.data.error
            dispatch(fetchSingleYearlyEventFailure(errorMsg))
        })
}
