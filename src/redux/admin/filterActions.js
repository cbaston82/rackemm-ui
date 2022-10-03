import { toast } from 'react-toastify'
import axios from 'axios'
import {
    GET_SAVED_FILTERS_REQUEST,
    GET_SAVED_FILTERS_FAILURE,
    GET_SAVED_FILTERS_SUCCESS,
    SAVE_FILTER_SUCCESS,
    SAVE_FILTER_REQUEST,
    SAVE_FILTER_FAILURE,
    DELETE_FILTER_SUCCESS,
    DELETE_FILTER_REQUEST,
    DELETE_FILTER_FAILURE,
    RESET_FILTERS_REQUEST,
    SET_FILTER_REQUEST,
} from './filterTypes'

import { getApiUrl } from '../../helpers'

export const getSavedFiltersRequest = () => ({
    type: GET_SAVED_FILTERS_REQUEST,
})

export const getSavedFiltersFailure = (error) => ({
    type: GET_SAVED_FILTERS_FAILURE,
    payload: error,
})

export const getSavedFiltersSuccess = (data) => ({
    type: GET_SAVED_FILTERS_SUCCESS,
    payload: data,
})

export const saveFilterRequest = () => ({
    type: SAVE_FILTER_REQUEST,
})

export const saveFilterFailure = (error) => ({
    type: SAVE_FILTER_FAILURE,
    payload: error,
})

export const saveFilterSuccess = (data) => ({
    type: SAVE_FILTER_SUCCESS,
    payload: data,
})

export const deleteFilterRequest = () => ({
    type: DELETE_FILTER_REQUEST,
})

export const deleteFilterFailure = (error) => ({
    type: DELETE_FILTER_FAILURE,
    payload: error,
})

export const deleteFilterSuccess = (data) => ({
    type: DELETE_FILTER_SUCCESS,
    payload: data,
})

export const resetFiltersRequest = () => ({
    type: RESET_FILTERS_REQUEST,
})

export const setFilterRequest = (data) => ({
    type: SET_FILTER_REQUEST,
    payload: data,
})

export const setFilter = (id) => (dispatch) => {
    dispatch(setFilterRequest(id))
}

export const resetFilters = () => (dispatch) => {
    dispatch(resetFiltersRequest())
}

export const getSavedFilters = () => (dispatch, state) => {
    dispatch(getSavedFiltersRequest())

    axios
        .get(`${getApiUrl()}filters`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(getSavedFiltersSuccess(response.data.data))
        })
        .catch((error) => {
            dispatch(getSavedFiltersFailure(error.response.data.message))
        })
}

export const saveFilter = (filter) => (dispatch, state) => {
    dispatch(saveFilterRequest())

    axios
        .post(`${getApiUrl()}filters`, filter, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(saveFilterSuccess(response.data.data))
            window.location.reload()
            toast.success('Filter successfully saved!')
        })
        .catch((error) => {
            dispatch(saveFilterFailure(error.response.data.message))
            const errorMsg = error.response.data.message
            toast.error(errorMsg)
        })
}

export const deleteFilter = (filterId) => (dispatch, state) => {
    dispatch(deleteFilterRequest())

    axios
        .delete(`${getApiUrl()}filters/${filterId}`, {
            headers: {
                Authorization: `Bearer ${state().auth.user.token}`,
            },
        })
        .then((response) => {
            dispatch(deleteFilterSuccess(filterId))
        })
        .catch((error) => {
            const errorMsg = error.response.data.error
            dispatch(deleteFilterFailure(errorMsg))
        })
}
