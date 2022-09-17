import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSingleYearlyEvent } from '../../redux'
import { useParams } from 'react-router-dom'
import NotFound404 from './NotFound404'
import { MoonLoader } from 'react-spinners'
import '../../css/event.css'
import LightBoxImage from '../LightBoxImage'
import BreadCrumbs from '../BreadCrumbs'

function YearlyEvent({ allYearlyEvents, fetchSingleYearlyEvent }) {
    const { id } = useParams()

    useEffect(() => {
        fetchSingleYearlyEvent(id)
    }, [fetchSingleYearlyEvent, id])

    return (
        <div className="container">
            {allYearlyEvents.event && !allYearlyEvents.error ? (
                <>
                    <BreadCrumbs
                        navigateToPreviousLink={true}
                        activeBreadcrumbTitle={allYearlyEvents.event.title}
                    />
                    <div className="emp-profile">
                        {allYearlyEvents.loading ? (
                            <div className="d-flex justify-content-center align-content-center">
                                <MoonLoader size={150} loading={true} />
                            </div>
                        ) : (
                            <form method="post">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="event-img">
                                            <LightBoxImage
                                                image={allYearlyEvents.event.posterImage}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="event-head">
                                            <h5>{allYearlyEvents.event.title}</h5>
                                            <h6>{allYearlyEvents.event.description}</h6>
                                            <p className="event-address">
                                                ADDRESS :{' '}
                                                <span>
                                                    {allYearlyEvents.event.address},{' '}
                                                    {allYearlyEvents.event.city}{' '}
                                                    {allYearlyEvents.event.state},{' '}
                                                    {allYearlyEvents.event.zipCode}
                                                </span>
                                            </p>
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        id="home-tab"
                                                        data-toggle="tab"
                                                        href="client/src/components/pagesPublic/YearlyEvent#home"
                                                        role="tab"
                                                        aria-controls="home"
                                                        aria-selected="true"
                                                    >
                                                        About
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="event-tags">
                                            <p>TAGS</p>
                                            <div>
                                                <span className="badge bg-secondary tag">Food</span>
                                                <span className="badge bg-secondary tag">Food</span>
                                                <span className="badge bg-secondary tag">Food</span>
                                                <span className="badge bg-secondary tag">Food</span>
                                                <span className="badge bg-secondary tag">Food</span>
                                                <span className="badge bg-secondary tag">Food</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="tab-content event-tab" id="myTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="home"
                                                role="tabpanel"
                                                aria-labelledby="home-tab"
                                            >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Game</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{allYearlyEvents.event.game}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Rating System</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{allYearlyEvents.event.ratingSystem}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Venue</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{allYearlyEvents.event.venue}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Point of Contact</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            {allYearlyEvents.event.pointOfContact}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Point of Contact Phone</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            {
                                                                allYearlyEvents.event
                                                                    .pointOfContactPhone
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Date</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            {allYearlyEvents.event.endDate >
                                                            allYearlyEvents.event.startDate ? (
                                                                <>
                                                                    {new Date(
                                                                        allYearlyEvents.event.startDate,
                                                                    ).toDateString()}{' '}
                                                                    -{' '}
                                                                    {new Date(
                                                                        allYearlyEvents.event.endDate,
                                                                    ).toDateString()}
                                                                </>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Point of Contact Phone</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            {
                                                                allYearlyEvents.event
                                                                    .pointOfContactPhone
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </>
            ) : (
                <NotFound404
                    message={allYearlyEvents.error}
                    buttonText={'Back to yearly events'}
                    redirectTo={'yearly-events'}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    allYearlyEvents: state.allYearlyEvents,
})

const mapDispatchToProps = (dispatch) => ({
    fetchSingleYearlyEvent: (id) => dispatch(fetchSingleYearlyEvent(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvent)
