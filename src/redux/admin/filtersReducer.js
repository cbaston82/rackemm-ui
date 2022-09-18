import {
    GET_SAVED_FILTERS_REQUEST,
    GET_SAVED_FILTERS_FAILURE,
    GET_SAVED_FILTERS_SUCCESS,
} from './filterTypes'

const initialState = {
    loading: false,
    filters: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SAVED_FILTERS_REQUEST:
            return {
                ...state,
                loading: true,
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
                filters: action.payload,
                error: '',
            }
        default:
            return state
    }
}

export default reducer
