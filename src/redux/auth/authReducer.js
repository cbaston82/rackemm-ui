import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_REQUEST,
} from './authTypes'

const initialState = {
    loading: false,
    token: '',
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload,
                error: '',
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case LOGOUT_USER_REQUEST:
            return {
                loading: false,
                token: '',
                error: '',
            }
        default:
            return state
    }
}

export default reducer
