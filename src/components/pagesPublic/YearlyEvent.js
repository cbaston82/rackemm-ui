import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSingleYearlyEvent } from '../../redux'
import { useParams } from 'react-router-dom'
import NotFound404 from './NotFound404'
import { MoonLoader } from 'react-spinners'
import LightBoxImage from '../LightBoxImage'
import BreadCrumbs from '../BreadCrumbs'
import usePageTitle from '../../hoook/usePageTitle'
import useCreateCalendarEvent from '../../hoook/useCreateCalendarEvent'
import { FaGoogle } from 'react-icons/fa'
import Button from '../Button'
import { canUserSaveEventToCalendar } from '../../helpers/config'

function YearlyEvent({ stripeCustomer, allYearlyEvents, fetchSingleYearlyEvent }) {
    usePageTitle('- Yearly Event')
    const [handleCreateCalendarEvent] = useCreateCalendarEvent()
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
                        <blockquote className="trello-card">
                            <a href="https:&#x2F;&#x2F;trello.com&#x2F;c&#x2F;lRCG6Kmc&#x2F;4-private-list">
                                Private List
                            </a>
                        </blockquote>
                        <script src="https://p.trellocdn.com/embed.min.js"></script>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="text-center">
                                    <LightBoxImage
                                        image={
                                            allYearlyEvents.event.posterImage.length
                                                ? allYearlyEvents.event.posterImage
                                                : 'https://res.cloudinary.com/imagine-design-develop/image/upload/v1663793568/rackemm_images/app_images/img.png'
                                        }
                                    />
                                    {canUserSaveEventToCalendar(stripeCustomer) && (
                                        <Button
                                            className="btn btn-primary w-100 mt-3"
                                            onClick={() =>
                                                handleCreateCalendarEvent(allYearlyEvents)
                                            }
                                        >
                                            Add to calendar <FaGoogle />
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row d-flex flex-row-reverse">
                                    <h4 className="fw-bolder">{allYearlyEvents.event.title}</h4>
                                    <h6 className="lead fw-light mt-3">
                                        {allYearlyEvents.event.description}
                                    </h6>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Address</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>
                                            {allYearlyEvents.event.address},{' '}
                                            {allYearlyEvents.event.city}{' '}
                                            {allYearlyEvents.event.state},{' '}
                                            {allYearlyEvents.event.zipCode}
                                        </p>
                                    </div>
                                </div>
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
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    fetchSingleYearlyEvent: (id) => dispatch(fetchSingleYearlyEvent(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvent)
