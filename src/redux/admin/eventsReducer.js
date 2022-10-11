import {
    CREATE_USER_EVENT_REQUEST,
    CREATE_USER_EVENT_SUCCESS,
    CREATE_USER_EVENT_FAILURE,
    GET_USER_EVENTS_SUCCESS,
    GET_USER_EVENTS_REQUEST,
    GET_USER_EVENTS_FAILURE,
    DELETE_USER_EVENT_REQUEST,
    DELETE_USER_EVENT_SUCCESS,
    DELETE_USER_EVENT_FAILURE,
    UPDATE_USER_EVENT_FAILURE,
    UPDATE_USER_EVENT_SUCCESS,
    UPDATE_USER_EVENT_REQUEST,
    RESET_USER_EVENTS_REQUEST,
} from './eventTypes'

const initialState = {
    loading: false,
    events: [],
    event: {},
    error: '',
    eventCreated: false,
    eventUpdate: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                eventCreated: false,
            }
        case CREATE_USER_EVENT_SUCCESS:
            return {
                events: [...state.events, action.payload],
                error: '',
                loading: false,
                eventCreated: true,
            }
        case CREATE_USER_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                eventCreated: false,
            }
        case GET_USER_EVENTS_REQUEST:
            return {
                ...state,
                events: [],
                loading: true,
                eventCreated: false,
            }
        case GET_USER_EVENTS_SUCCESS:
            return {
                events: action.payload,
                error: '',
                loading: false,
                eventCreated: false,
            }
        case GET_USER_EVENTS_FAILURE:
            return {
                events: [],
                error: action.payload,
                loading: false,
                eventCreated: false,
            }
        case DELETE_USER_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                eventCreated: false,
            }
        case DELETE_USER_EVENT_SUCCESS:
            return {
                ...state,
                events: state.events.filter((event) => event._id !== action.payload._id),
                error: '',
                loading: false,
                eventCreated: false,
            }
        case DELETE_USER_EVENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                eventCreated: false,
            }
        case UPDATE_USER_EVENT_REQUEST:
            return {
                ...state,
                loading: true,
                eventCreated: false,
                eventUpdated: false,
            }
        case UPDATE_USER_EVENT_SUCCESS:
            return {
                ...state,
                events: [...state.events, action.payload],
                error: '',
                loading: false,
                eventCreated: false,
                eventUpdated: true,
            }
        case UPDATE_USER_EVENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
                eventCreated: false,
                eventUpdated: false,
            }
        case RESET_USER_EVENTS_REQUEST:
            return {
                ...initialState,
            }
        default:
            return state
    }
}

export default reducer
