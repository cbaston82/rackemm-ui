import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainRoutes from './components/MainRoutes'
import MainNav from './components/MainNav'
import './App.css'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <MainNav />
            <main className="flex-shrink-0">
                <MainRoutes />
            </main>
            <Footer />
            <ToastContainer />
        </>
    )
}

export default App
