import {
    CREATE_USER_WEEKLY_EVENT_REQUEST,
    CREATE_USER_WEEKLY_EVENT_SUCCESS,
    CREATE_USER_WEEKLY_EVENT_FAILURE,
    GET_USER_WEEKLY_EVENTS_SUCCESS,
    GET_USER_WEEKLY_EVENTS_REQUEST,
    GET_USER_WEEKLY_EVENTS_FAILURE,
    DELETE_USER_WEEKLY_EVENT_REQUEST,
    DELETE_USER_WEEKLY_EVENT_SUCCESS,
    DELETE_USER_WEEKLY_EVENT_FAILURE,
    UPDATE_USER_WEEKLY_EVENT_FAILURE,
    UPDATE_USER_WEEKLY_EVENT_SUCCESS,
    UPDATE_USER_WEEKLY_EVENT_REQUEST,
    RESET_USER_WEEKLY_EVENTS_REQUEST,
} from './userWeeklyEventTypes'

const initialState = {
    loading: false,
    events: [],
    error: '',
    eventCreated: false,
    eventUpdate: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_WEEKLY_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                eventCreated: false,
            }
        case CREATE_USER_WEEKLY_EVENT_SUCCESS:
            return {
                loading: false,
                events: [...state.events, action.payload],
                error: '',
                eventCreated: true,
            }
        case CREATE_USER_WEEKLY_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                eventCreated: false,
            }
        case GET_USER_WEEKLY_EVENTS_REQUEST:
            return {
                ...state,
                events: [],
                loading: true,
                eventCreated: false,
            }
        case GET_USER_WEEKLY_EVENTS_SUCCESS:
            return {
                loading: false,
                events: action.payload,
                error: '',
                eventCreated: false,
            }
        case GET_USER_WEEKLY_EVENTS_FAILURE:
            return {
                events: [],
                loading: false,
                error: action.payload,
                eventCreated: false,
            }
        case DELETE_USER_WEEKLY_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                eventCreated: false,
            }
        case DELETE_USER_WEEKLY_EVENT_SUCCESS:
            console.log('dddddddddddddddddddd', action.payload)
            return {
                ...state,
                loading: false,
                events: state.events.filter((event) => event._id !== action.payload._id),
                error: '',
                eventCreated: false,
            }
        case DELETE_USER_WEEKLY_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                eventCreated: false,
            }
        case UPDATE_USER_WEEKLY_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                eventCreated: false,
                eventUpdated: false,
            }
        case UPDATE_USER_WEEKLY_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                events: [...state.events, action.payload],
                error: '',
                eventCreated: false,
                eventUpdated: true,
            }
        case UPDATE_USER_WEEKLY_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                eventCreated: false,
                eventUpdated: false,
            }
        case RESET_USER_WEEKLY_EVENTS_REQUEST:
            return {
                ...initialState,
            }
        default:
            return state
    }
}

export default reducer
