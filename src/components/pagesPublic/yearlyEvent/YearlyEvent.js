import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import { FaGoogle } from 'react-icons/fa'
import { fetchSingleYearlyEvent } from '../../../redux'
import NotFound404 from '../NotFound404'
import LightBoxImage from '../../LightBoxImage'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'
import useCreateCalendarEvent from '../../../hoook/useCreateCalendarEvent'
import Button from '../../Button'
import { userHasValidSubscription } from '../../../helpers/config'
import EventDetails from '../../EventDetails'

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
                buttonText="Back to yearly events"
                redirectTo="yearly-events"
            />
        )
    }

    return (
        <div className="container" id="event-section">
            <BreadCrumbs
                navigateToPreviousLink
                activeBreadcrumbTitle={allYearlyEvents.event.title}
            />

            {allYearlyEvents.loading ? (
                <div className="d-flex justify-content-center align-content-center">
                    <MoonLoader size={150} loading />
                </div>
            ) : (
                <div className="card rounded-0 p-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <LightBoxImage
                                    image={
                                        allYearlyEvents.event.length
                                            ? allYearlyEvents.event.posterImage
                                            : 'https://res.cloudinary.com/imagine-design-develop/image/upload/v1663793568/rackemm_images/app_images/img.png'
                                    }
                                />
                                {userHasValidSubscription(stripeCustomer) && (
                                    <Button
                                        className="btn btn-primary w-100 mt-3"
                                        onClick={() => handleCreateCalendarEvent(allYearlyEvents)}
                                    >
                                        Add to calendar <FaGoogle />
                                    </Button>
                                )}
                            </div>
                            <div className="col-md-9">
                                <EventDetails event={allYearlyEvents.event} />
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
