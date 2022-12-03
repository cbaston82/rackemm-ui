import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_FAILURE,
    GET_USER_INFO_SUCCESS,
    UPDATE_USER_INFO_REQUEST,
    UPDATE_USER_INFO_FAILURE,
    UPDATE_USER_INFO_SUCCESS,
    RESET_USER_INFO_REQUEST,
} from './userInfoTypes'

const initialState = {
    loading: false,
    me: {},
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                loading: true,
                error: '',
                me: {},
            }
        case GET_USER_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case GET_USER_INFO_SUCCESS:
            return {
                me: { ...action.payload },
                error: '',
                loading: false,
            }
        case UPDATE_USER_INFO_REQUEST:
            return {
                ...state,
                loading: true,
                error: '',
            }
        case UPDATE_USER_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UPDATE_USER_INFO_SUCCESS:
            return {
                me: { ...action.payload },
                error: '',
                loading: false,
            }
        case RESET_USER_INFO_REQUEST:
            return {
                ...initialState,
            }
        default:
            return state
    }
}

export default reducer
