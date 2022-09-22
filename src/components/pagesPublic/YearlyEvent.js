import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSingleYearlyEvent } from '../../redux'
import { useParams } from 'react-router-dom'
import NotFound404 from './NotFound404'
import { MoonLoader } from 'react-spinners'
import LightBoxImage from '../LightBoxImage'
import BreadCrumbs from '../BreadCrumbs'
import usePageTitle from '../../hoook/usePageTitle'

function YearlyEvent({ allYearlyEvents, fetchSingleYearlyEvent }) {
    usePageTitle('- Yearly Event')
    const { id } = useParams()

    useEffect(() => {
        fetchSingleYearlyEvent(id)
    }, [fetchSingleYearlyEvent, id])

    if (allYearlyEvents.event && allYearlyEvents.error) {
        return (
            <NotFound404
                message={allYearlyEvents.error}
                buttonText={'Back to yearly events'}
                redirectTo={'yearly-events'}
            />
        )
    }

    return (
        <div className="container" id="event-section">
            <BreadCrumbs
                navigateToPreviousLink={true}
                activeBreadcrumbTitle={allYearlyEvents.event.title}
            />

            {allYearlyEvents.loading ? (
                <div className="d-flex justify-content-center align-content-center">
                    <MoonLoader size={150} loading={true} />
                </div>
            ) : (
                <div className="card rounded-0 p-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="text-center">
                                    <LightBoxImage image={allYearlyEvents.event.posterImage} />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <h5>{allYearlyEvents.event.title}</h5>
                                <h6 className="text-info">{allYearlyEvents.event.description}</h6>
                                <p className="mt-3 fa-spin-pulse text-black-50">
                                    ADDRESS :{' '}
                                    <span>
                                        {allYearlyEvents.event.address},{' '}
                                        {allYearlyEvents.event.city} {allYearlyEvents.event.state},{' '}
                                        {allYearlyEvents.event.zipCode}
                                    </span>
                                </p>
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
                                        <p>{allYearlyEvents.event.pointOfContact}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Point of Contact Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allYearlyEvents.event.pointOfContactPhone}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Day</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allYearlyEvents.event.day}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Point of Contact Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allYearlyEvents.event.pointOfContactPhone}</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
