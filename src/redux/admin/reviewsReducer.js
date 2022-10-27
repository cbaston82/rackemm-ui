import {
    CREATE_REVIEW_REQUEST,
    CREATE_REVIEW_FAILURE,
    CREATE_REVIEW_SUCCESS,
    UPDATE_REVIEW_SUCCESS,
    UPDATE_REVIEW_REQUEST,
    UPDATE_REVIEW_FAILURE,
} from './reviewTypes'

const initialState = {
    review: {},
    error: false,
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                review: action.payload,
            }
        case CREATE_REVIEW_FAILURE:
            return {
                ...state,
                loading: false,
                review: {},
            }
        case UPDATE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                review: action.payload,
            }
        case UPDATE_REVIEW_FAILURE:
            return {
                ...state,
                loading: false,
                review: {},
            }
        default:
            return state
    }
}

export default reducer
