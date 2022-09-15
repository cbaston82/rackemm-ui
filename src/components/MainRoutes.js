import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import Protected from './Protected'
import ProfilePage from '../pages/admin/ProfilePage'
import WeeklyEvents from '../pages/WeeklyEvents'
import LandingPage from '../pages/LandingPage'
import AboutPage from '../pages/AboutPage'
import YearlyEvents from '../pages/YearlyEvents'
import PricingPage from '../pages/PricingPage'
import FaqPage from '../pages/FaqPage'
import FeaturesPage from '../pages/FeaturesPage'
import WeeklyEvent from '../pages/WeeklyEvent'
import YearlyEvent from '../pages/YearlyEvent'
import LoginPage from '../pages/LoginPge'
import RegisterPage from '../pages/RegisterPage'
import AccountYearlyEvents from '../pages/admin/yearlyEvents/YearlyEvents'
import TermsOfUse from '../pages/TermsOfUse'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import CreateYearlyEvent from '../pages/admin/yearlyEvents/CreateYearlyEvent'
import EditYearlyEvent from '../pages/admin/yearlyEvents/EditYearlyEvent'
import AccountWeeklyEvents from '../pages/admin/weeklyEvents/WeeklyEvents'
import CreateWeeklyEvent from '../pages/admin/weeklyEvents/CreateWeeklyEvent'
import EditWeeklyEvent from '../pages/admin/weeklyEvents/EditWeeklyEvent'
import LoggedIn from './LoggedIn'

function MainRoutes({ auth }) {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/weekly-events" element={<WeeklyEvents />} />
            <Route exact path="/weekly-event/:id" element={<WeeklyEvent />} />
            <Route exact path="/yearly-event/:id" element={<YearlyEvent />} />
            <Route exact path="/yearly-events" element={<YearlyEvents />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/features" element={<FeaturesPage />} />
            <Route exact path="/faq" element={<FaqPage />} />
            <Route exact path="/pricing" element={<PricingPage />} />
            <Route exact path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route exact path="/termsOfUse" element={<TermsOfUse />} />
            {/* Auth Routes */}
            <Route
                exact
                path="/login"
                element={
                    <LoggedIn auth={auth}>
                        <LoginPage />
                    </LoggedIn>
                }
            />
            <Route
                exact
                path="/register"
                element={
                    <LoggedIn auth={auth}>
                        <RegisterPage />
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
                    <Protected auth={auth}>
                        <AccountYearlyEvents />
                    </Protected>
                }
            />
            <Route
                exact
                path="/account/yearly-events/create"
                element={
                    <Protected auth={auth}>
                        <CreateYearlyEvent />
                    </Protected>
                }
            />
            <Route
                exact
                path="/account/yearly-events/edit/:id"
                element={
                    <Protected auth={auth}>
                        <EditYearlyEvent />
                    </Protected>
                }
            />
            <Route
                exact
                path="/account/weekly-events/"
                element={
                    <Protected auth={auth}>
                        <AccountWeeklyEvents />
                    </Protected>
                }
            />
            <Route
                exact
                path="/account/weekly-events/create"
                element={
                    <Protected auth={auth}>
                        <CreateWeeklyEvent />
                    </Protected>
                }
            />
            <Route
                exact
                path="/account/weekly-events/edit/:id"
                element={
                    <Protected auth={auth}>
                        <EditWeeklyEvent />
                    </Protected>
                }
            />
        </Routes>
    )
}
const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, null)(MainRoutes)
