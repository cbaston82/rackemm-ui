import {
    FETCH_PUBLIC_EVENTS_REQUEST,
    FETCH_PUBLIC_EVENTS_SUCCESS,
    FETCH_PUBLIC_EVENTS_FAILURE,
    FETCH_SINGLE_PUBLIC_EVENT_SUCCESS,
    FETCH_SINGLE_PUBLIC_EVENT_REQUEST,
    FETCH_SINGLE_PUBLIC_EVENT_FAILURE,
} from './publicEventTypes'

const initialState = {
    loading: false,
    events: [],
    event: {},
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PUBLIC_EVENTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PUBLIC_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload,
                error: '',
            }
        case FETCH_PUBLIC_EVENTS_FAILURE:
            return {
                ...state,
                loading: false,
                events: [],
                error: action.payload,
            }
        case FETCH_SINGLE_PUBLIC_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SINGLE_PUBLIC_EVENT_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false,
                event: action.payload,
            }
        case FETCH_SINGLE_PUBLIC_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer
