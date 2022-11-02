import React from 'react'
// import envcmd from 'env-cmd'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainRoutes from './components/structure/MainRoutes'
import MainNav from './components/structure/MainNav'
import './App.css'
import Footer from './components/structure/Footer'
import SideMenu from './components/structure/SideMenu'

function App() {
    return (
        <>
            <MainNav />
            <main className="flex-shrink-0">
                <MainRoutes />
            </main>
            <Footer />
            <SideMenu />
            <ToastContainer position="top-left" pauseOnHover />
        </>
    )
}

export default App
