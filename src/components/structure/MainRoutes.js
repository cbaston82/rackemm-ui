import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Protected from './Protected'
import ProfilePage from '../pagesAdmin/ProfilePage'
import WeeklyEvents from '../pagesPublic/weeklyEvents/WeeklyEvents'
import Landing from '../pagesPublic/home/Landing'
import About from '../pagesPublic/About'
import YearlyEvents from '../pagesPublic/yearlyEvents/YearlyEvents'
import Pricing from '../pagesPublic/pricing/Pricing'
import Faq from '../pagesPublic/Faq'
import Features from '../pagesPublic/Features'
import WeeklyEvent from '../pagesPublic/weeklyEvent/WeeklyEvent'
import YearlyEvent from '../pagesPublic/yearlyEvent/YearlyEvent'
import Login from '../pagesPublic/Login'
import Register from '../pagesPublic/Register'
import AccountYearlyEvents from '../pagesAdmin/yearlyEvents/YearlyEvents'
import TermsOfUse from '../pagesPublic/TermsOfUse'
import PrivacyPolicy from '../pagesPublic/PrivacyPolicy'
import CreateYearlyEvent from '../pagesAdmin/yearlyEvents/CreateYearlyEvent'
import EditYearlyEvent from '../pagesAdmin/yearlyEvents/EditYearlyEvent'
import AccountWeeklyEvents from '../pagesAdmin/weeklyEvents/WeeklyEvents'
import CreateWeeklyEvent from '../pagesAdmin/weeklyEvents/CreateWeeklyEvent'
import EditWeeklyEvent from '../pagesAdmin/weeklyEvents/EditWeeklyEvent'
import LoggedIn from '../LoggedIn'
import MediaPage from '../pagesAdmin/MediaPage'
import FiltersPage from '../pagesAdmin/filters/FiltersPage'
import HasSubscriptionRoutes from './HasSubscriptionRoutes'
import ForgotPassword from '../pagesPublic/ForgotPassword'

function MainRoutes({ auth, stripeCustomer }) {
    return (
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/weekly-events" element={<WeeklyEvents />} />
            <Route exact path="/weekly-event/:id" element={<WeeklyEvent />} />
            <Route exact path="/yearly-event/:id" element={<YearlyEvent />} />
            <Route exact path="/yearly-events" element={<YearlyEvents />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/features" element={<Features />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/terms-of-use" element={<TermsOfUse />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
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
                path="/account/profile"
                element={
                    <Protected auth={auth}>
                        <ProfilePage />
                    </Protected>
                }
            />
            <Route
                exact
                path="/account/yearly-events/"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <AccountYearlyEvents />
                    </HasSubscriptionRoutes>
                }
            />
            <Route
                exact
                path="/account/yearly-events/create"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <CreateYearlyEvent />
                    </HasSubscriptionRoutes>
                }
            />
            <Route
                exact
                path="/account/yearly-events/edit/:id"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <EditYearlyEvent />
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
            <Route
                exact
                path="/account/filters"
                element={
                    <HasSubscriptionRoutes auth={auth} stripeCustomer={stripeCustomer}>
                        <FiltersPage />
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
