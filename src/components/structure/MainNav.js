import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import { logoutUser } from '../../redux'

function MainNav({ logoutUser, auth }) {
    const handleLogout = () => {
        logoutUser()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 rackemm-border-bottom">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://res.cloudinary.com/imagine-design-develop/image/upload/v1663402485/rackemm_images/app_images/logo-white.png"
                        height="40"
                        alt=""
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/weekly-events">
                                Weekly Events
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/yearly-events">
                                Yearly Events
                            </NavLink>
                        </li>
                        {auth.user.email ? (
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <FaUserAlt /> {auth.user.email}
                                </Link>
                                <ul
                                    className="dropdown-menu rackemm-dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <NavLink className="dropdown-item" to="/account/profile">
                                            Profile
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li>
                                        <NavLink className="dropdown-item" to="/account/media">
                                            Media
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li>
                                        <NavLink className="dropdown-item" to="/account/filters">
                                            Filters
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/account/weekly-events"
                                        >
                                            Weekly Events
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to="/account/yearly-events"
                                        >
                                            Yearly Events
                                        </NavLink>
                                    </li>
                                    <hr />
                                    <li>
                                        <button className="dropdown-item" onClick={handleLogout}>
                                            <FaSignOutAlt /> Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
    logoutUser: (user) => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainNav)
