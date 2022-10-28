// import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { userHasSubscription } from '../../helpers/config'

function SideMenu({ stripeCustomer }) {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <div
            className="offcanvas offcanvas-start bg-black"
            tabIndex="-1"
            id="offCanvasNavigation"
            aria-labelledby="offcanvasExampleLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">
                    Menu
                </h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body">
                <ul>
                    <li>
                        <NavLink
                            className={`${
                                location.pathname === '/account' ? 'active-side-nav' : ''
                            } dropdown-item text-white`}
                            to="/account"
                        >
                            Account
                        </NavLink>
                    </li>
                    <hr className="m-0 p-0 text-white" />
                    {userHasSubscription(stripeCustomer) && (
                        <>
                            <li>
                                <NavLink
                                    className={`${
                                        location.pathname === '/account/media'
                                            ? 'active-side-nav'
                                            : ''
                                    } dropdown-item text-white`}
                                    to="/account/media"
                                >
                                    Media
                                </NavLink>
                            </li>
                            <hr className="m-0 p-0 text-white" />
                            <li>
                                <NavLink
                                    className={`${
                                        location.pathname === '/account/filters'
                                            ? 'active-side-nav'
                                            : ''
                                    } dropdown-item text-white`}
                                    to="/account/filters"
                                >
                                    Filters
                                </NavLink>
                            </li>
                            <hr className="m-0 p-0 text-white" />
                            <li>
                                <NavLink
                                    className={`${
                                        location.pathname === '/account/weekly-events'
                                            ? 'active-side-nav'
                                            : ''
                                    } dropdown-item text-white`}
                                    to="/account/weekly-events"
                                >
                                    Weekly Events
                                </NavLink>
                            </li>
                            <hr className="m-0 p-0 text-white" />
                            <li>
                                <NavLink
                                    className={`${
                                        location.pathname === '/account/yearly-events'
                                            ? 'active-side-nav'
                                            : ''
                                    } dropdown-item text-white`}
                                    to="/account/yearly-events"
                                >
                                    Yearly Events
                                </NavLink>
                            </li>
                            <hr className="m-0 p-0 text-white" />
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    stripeCustomer: state.stripeCustomer,
})

export default connect(mapStateToProps, null)(SideMenu)
