import { connect } from 'react-redux'
import { FaBars } from 'react-icons/fa'
import { logoutUser } from '../../redux'

function Dashboard() {
    return (
        <div className="container">
            <a
                className="btn btn-secondary"
                data-bs-toggle="offcanvas"
                href="#offCanvasNavigation"
                role="button"
                aria-controls="offCanvasNavigation"
            >
                <FaBars />
            </a>
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
