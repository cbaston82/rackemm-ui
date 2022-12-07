import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

function SideMenu({ location, userIsSubscribed }) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <button type="button" className="mb-5 btn btn-secondary" onClick={handleShow}>
                Menu <FaBars />
            </button>
            <Offcanvas show={show} onHide={handleClose} className="bg-dark">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <NavLink
                                className={`${
                                    location === '/account' ? 'active-side-nav' : ''
                                } dropdown-item text-white`}
                                to="/account"
                            >
                                Account
                            </NavLink>
                        </li>
                        <hr className="m-0 p-0 text-white" />
                        <li>
                            <NavLink
                                className={`${
                                    location === '/account/filters' ? 'active-side-nav' : ''
                                } dropdown-item text-white`}
                                to="/account/filters"
                            >
                                Filters
                            </NavLink>
                            <hr className="m-0 p-0 text-white" />
                        </li>
                        {userIsSubscribed && (
                            <>
                                <li>
                                    <NavLink
                                        className={`${
                                            location === '/account/media' ? 'active-side-nav' : ''
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
                                            location === '/account/special-events'
                                                ? 'active-side-nav'
                                                : ''
                                        } dropdown-item text-white`}
                                        to="/account/special-events"
                                    >
                                        Special Events
                                    </NavLink>
                                </li>
                                <hr className="m-0 p-0 text-white" />

                                <li>
                                    <NavLink
                                        className={`${
                                            location === '/account/weekly-events'
                                                ? 'active-side-nav'
                                                : ''
                                        } dropdown-item text-white`}
                                        to="/account/weekly-events"
                                    >
                                        Weekly Events
                                    </NavLink>
                                </li>
                                <hr className="m-0 p-0 text-white" />
                            </>
                        )}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideMenu
