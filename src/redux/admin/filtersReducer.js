import {
    GET_SAVED_FILTERS_REQUEST,
    GET_SAVED_FILTERS_FAILURE,
    GET_SAVED_FILTERS_SUCCESS,
    SAVE_FILTER_SUCCESS,
    SAVE_FILTER_REQUEST,
    SAVE_FILTER_FAILURE,
    RESET_FILTERS_REQUEST,
    SET_FILTER_REQUEST,
    DELETE_FILTER_SUCCESS,
    DELETE_FILTER_REQUEST,
    DELETE_FILTER_FAILURE,
} from './filterTypes'

const initialState = {
    loading: false,
    filters: [],
    error: '',
    filterCreated: false,
    loadedFilter: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SAVED_FILTERS_REQUEST:
            return {
                ...state,
                loading: true,
                filterCreated: false,
            }
        case GET_SAVED_FILTERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case GET_SAVED_FILTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                filters: action.payload,
                error: '',
            }
        case SAVE_FILTER_REQUEST:
            return {
                ...state,
                loading: true,
                filterCreated: false,
            }
        case SAVE_FILTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case SAVE_FILTER_SUCCESS:
            return {
                ...state,
                loading: false,
                filters: [...state.filters, action.payload],
                error: '',
                filterCreated: true,
            }
        case DELETE_FILTER_REQUEST:
            return {
                ...state,
                loading: true,
                filterCreated: false,
            }
        case DELETE_FILTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case DELETE_FILTER_SUCCESS:
            return {
                ...state,
                loading: false,
                filters: [...state.filters.filter((filter) => filter._id !== action.payload)],
                error: '',
                filterCreated: true,
            }
        case SET_FILTER_REQUEST:
            return {
                ...state,
                loadedFilter: action.payload,
            }
        case RESET_FILTERS_REQUEST:
            return initialState
        default:
            return state
    }
}

export default reducer
