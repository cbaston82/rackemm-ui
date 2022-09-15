import {
    FETCH_ALL_WEEKLY_EVENTS_REQUEST,
    FETCH_ALL_WEEKLY_EVENTS_SUCCESS,
    FETCH_ALL_WEEKLY_EVENTS_FAILURE,
    FETCH_SINGLE_WEEKLY_EVENT_SUCCESS,
    FETCH_SINGLE_WEEKLY_EVENT_REQUEST,
    FETCH_SINGLE_WEEKLY_EVENT_FAILURE,
} from './weeklyEventTypes'

const initialState = {
    loading: false,
    events: [],
    event: {},
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_WEEKLY_EVENTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_ALL_WEEKLY_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload,
                error: '',
            }
        case FETCH_ALL_WEEKLY_EVENTS_FAILURE:
            return {
                ...state,
                loading: false,
                events: [],
                error: action.payload,
            }
        case FETCH_SINGLE_WEEKLY_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SINGLE_WEEKLY_EVENT_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                event: action.payload,
            }
        case FETCH_SINGLE_WEEKLY_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                event: {},
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer
