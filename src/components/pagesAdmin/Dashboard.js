import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { logoutUser } from '../../redux'
import SideMenu from '../structure/SideMenu'
import { userHasSubscription } from '../../helpers/config'
import usePageTitle from '../../hoook/usePageTitle'

function Dashboard({ stripeCustomer }) {
    usePageTitle('- Dashboard')
    const location = useLocation()

    return (
        <div className="container">
            <SideMenu
                userIsSubscribed={userHasSubscription(stripeCustomer)}
                location={location.pathname}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
