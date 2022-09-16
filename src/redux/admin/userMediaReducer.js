import {
    UPLOAD_USER_MEDIA_REQUEST,
    UPLOAD_USER_MEDIA_SUCCESS,
    UPLOAD_USER_MEDIA_FAILURE,
    UPLOAD_USER_MEDIA_RESET,
    GET_USER_MEDIA_SUCCESS,
    GET_USER_MEDIA_REQUEST,
    GET_USER_MEDIA_FAILURE,
    DELETE_USER_MEDIA_REQUEST,
    DELETE_USER_MEDIA_FAILURE,
    DELETE_USER_MEDIA_SUCCESS,
} from './userMediaTypes'

const initialState = {
    loading: false,
    media: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_USER_MEDIA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPLOAD_USER_MEDIA_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case UPLOAD_USER_MEDIA_SUCCESS:
            return {
                ...state,
                loading: false,
                media: [...state.media, action.payload],
            }
        case UPLOAD_USER_MEDIA_RESET:
            return initialState
        case GET_USER_MEDIA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_MEDIA_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case GET_USER_MEDIA_SUCCESS:
            return {
                ...state,
                loading: false,
                media: action.payload,
            }
        case DELETE_USER_MEDIA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case DELETE_USER_MEDIA_FAILURE:
            return {
                ...state,
                loading: false,
            }
        case DELETE_USER_MEDIA_SUCCESS:
            return {
                ...state,
                loading: false,
                media: [...state.media.filter((image) => image.publicId !== action.payload)],
            }
        default:
            return state
    }
}

export default reducer
