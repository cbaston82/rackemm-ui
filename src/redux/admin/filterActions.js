import {
    GET_SAVED_FILTERS_REQUEST,
    GET_SAVED_FILTERS_FAILURE,
    GET_SAVED_FILTERS_SUCCESS,
} from './filterTypes'

import { toast } from 'react-toastify'
import { getApiUrl } from '../../helpers/config'
import axios from 'axios'

export const getSavedFiltersRequest = () => ({
    type: GET_SAVED_FILTERS_REQUEST,
})

export const getSavedFiltersFailure = (data) => ({
    type: GET_SAVED_FILTERS_FAILURE,
    payload: data,
})

export const getSavedFiltersSuccess = (error) => ({
    type: GET_SAVED_FILTERS_SUCCESS,
    payload: error,
})

export const getSavedFilters = () => (dispatch, state) => {
    dispatch(getSavedFiltersRequest())

    axios
        .get(`${getApiUrl()}filters`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(getSavedFiltersSuccess(response.data))
        })
        .catch((error) => {
            dispatch(getSavedFiltersFailure(error.response.data.error))
        })
}
