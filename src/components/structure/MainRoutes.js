import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Protected from './Protected'
import AccountPage from '../pagesAdmin/profile/AccountPage'
import WeeklyEvents from '../pagesPublic/weeklyEvents/WeeklyEvents'
import Landing from '../pagesPublic/home/Landing'
import About from '../pagesPublic/About'
import SpecialEvents from '../pagesPublic/specialEvents/SpecialEvents'
import Pricing from '../pagesPublic/pricing/Pricing'
import Faq from '../pagesPublic/Faq'
import Features from '../pagesPublic/Features'
import Event from '../pagesPublic/Event/Event'
import Login from '../pagesPublic/Login'
import Register from '../pagesPublic/Register'
import AccountSpecialEvents from '../pagesAdmin/specialEvents/SpecialEvents'
import TermsOfUse from '../pagesPublic/TermsOfUse'
import PrivacyPolicy from '../pagesPublic/PrivacyPolicy'
import AccountWeeklyEvents from '../pagesAdmin/weeklyEvents/WeeklyEvents'
import CreateWeeklyEvent from '../pagesAdmin/weeklyEvents/CreateWeeklyEvent'
import EditWeeklyEvent from '../pagesAdmin/weeklyEvents/EditWeeklyEvent'
import LoggedIn from '../LoggedIn'
import MediaPage from '../pagesAdmin/MediaPage'
import FiltersPage from '../pagesAdmin/filters/FiltersPage'
import HasSubscriptionRoutes from './HasSubscriptionRoutes'
import ForgotPassword from '../pagesPublic/ForgotPassword'
import Dashboard from '../pagesAdmin/Dashboard'
import ResetPassword from '../pagesPublic/resetPassword'
import CreateSpecialEvent from '../pagesAdmin/specialEvents/CreateSpecialEvent'
import EditSpecialEvent from '../pagesAdmin/specialEvents/EditSpecialEvent'

function MainRoutes({ auth, stripeCustomer }) {
    return (
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/weekly-events" element={<WeeklyEvents />} />
            <Route exact path="/special-events" element={<SpecialEvents />} />
            <Route exact path="/event/:id" element={<Event />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/features" element={<Features />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/terms-of-use" element={<TermsOfUse />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/reset-password/:resetToken" element={<ResetPassword />} />
            {/* Auth Routes */}
            <Route
                exact
                path="/login"
                element={
                    <LoggedIn auth={auth}>
                        <Login />
                    </LoggedIn>
                }
            />
            <Route
                exact
                path="/register"
                element={
                    <LoggedIn auth={auth}>
                        <Register />
                    </LoggedIn>
                }
            />
            <Route
                exact
                path="/account"
                element={
                    <Protected auth={auth}>
                        <AccountPage />
                    </Protected>
                }
            />
            <Route
                exact
                path="/account/filters"
                element={
                    <Protected auth={auth} stripeCustomer={stripeCustomer}>
                        <FiltersPage />
                    </Protected>
                }
            />

            <Route
                exact
                path="/account/dashboard"
                element={
                    <Protected auth={auth}>
                        <Dashboard />
                    </Protected>
                }
            />
            <Route
                exact
                path="/account/special-events/"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <AccountSpecialEvents />
                    </HasSubscriptionRoutes>
                }
            />
            <Route
                exact
                path="/account/special-events/create"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <CreateSpecialEvent />
                    </HasSubscriptionRoutes>
                }
            />
            <Route
                exact
                path="/account/special-events/edit/:id"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <EditSpecialEvent />
                    </HasSubscriptionRoutes>
                }
            />
            <Route
                exact
                path="/account/weekly-events/"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <AccountWeeklyEvents />
                    </HasSubscriptionRoutes>
                }
            />
            <Route
                exact
                path="/account/weekly-events/create"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <CreateWeeklyEvent />
                    </HasSubscriptionRoutes>
                }
            />
            <Route
                exact
                path="/account/weekly-events/edit/:id"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <EditWeeklyEvent />
                    </HasSubscriptionRoutes>
                }
            />
            <Route
                exact
                path="/account/media"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <MediaPage />
                    </HasSubscriptionRoutes>
                }
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    stripeCustomer: state.stripeCustomer,
})

export default connect(mapStateToProps, null)(MainRoutes)
