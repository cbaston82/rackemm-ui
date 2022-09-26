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
                                    <h6 className="fw-light mt-3">
                                        {allYearlyEvents.event.description}
                                    </h6>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-12">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">Venue</label>
                                                <p className="mb-0 fw-light">
                                                    {allYearlyEvents.event.venue}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">Address</label>
                                                <p className="mb-0 text-primary">
                                                    {allYearlyEvents.event.address},{' '}
                                                    {allYearlyEvents.event.city}{' '}
                                                    {allYearlyEvents.event.state},{' '}
                                                    {allYearlyEvents.event.zipCode}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">Game</label>
                                                <p className="m-0 fw-light">
                                                    {allYearlyEvents.event.game}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">Rating System</label>
                                                <p className="mb-0 fw-light">
                                                    {allYearlyEvents.event.ratingSystem}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">
                                                    Point of Contact
                                                </label>
                                                <p className="mb-0 fw-light">
                                                    {allYearlyEvents.event.pointOfContact}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">
                                                    Point of Contact Phone
                                                </label>
                                                <p className="mb-0 fw-light">
                                                    {allYearlyEvents.event.pointOfContactPhone}
                                                </p>
                                            </li>
                                        </ul>
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
