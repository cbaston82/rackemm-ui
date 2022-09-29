import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import App from './App'

const container = document.getElementById('root')
const rootContainer = ReactDOM.createRoot(container)
rootContainer.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
)
