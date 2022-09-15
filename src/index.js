import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')
const rootContainer = ReactDOM.createRoot(container)
rootContainer.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
)
