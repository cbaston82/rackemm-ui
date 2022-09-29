/* eslint no-console: 0 */
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    } catch (e) {
        console.error(e)
    }
}

const loadFromLocalStorage = () => {
    try {
        // eslint-disable-next-line no-undef
        const stateStr = localStorage.getItem('state')
        return stateStr ? JSON.parse(stateStr) : undefined
    } catch (e) {
        console.error(e)
        return undefined
    }
}

const persistentStore = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    persistentStore,
    composeWithDevTools(applyMiddleware(thunk, logger)),
)

store.subscribe(() => {
    saveToLocalStorage(store.getState())
})

export default store
