import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import { FaGoogle } from 'react-icons/fa'
import { createReview, editReview, fetchSinglePublicEvent } from '../../../redux'
import NotFound404 from '../NotFound404'
import LightBoxImage from '../../LightBoxImage'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'
import useCreateCalendarEvent from '../../../hoook/useCreateCalendarEvent'
import Button from '../../Button'
import { userHasValidSubscription } from '../../../helpers/config'
import EventDetails from '../../EventDetails'
import Reviews from '../../Reviews'
import useReviewHooks from '../../../hoook/useReviewHooks'

function YearlyEvent({
    stripeCustomer,
    publicEvents,
    fetchSinglePublicEvent,
    auth,
    createReview,
    editReview,
    givenReview,
}) {
    usePageTitle('- Yearly Event')
    const { handleDeleteReview } = useReviewHooks(null, auth)
    const { handleSaveReview } = useReviewHooks(createReview, auth)
    const { handleEditReview } = useReviewHooks(editReview, auth)

    const [handleCreateCalendarEvent] = useCreateCalendarEvent()
    const { id } = useParams()

    useEffect(() => {
        fetchSinglePublicEvent(id)
    }, [fetchSinglePublicEvent, id])

    if (publicEvents.event && publicEvents.error) {
        return (
            <NotFound404
                message={publicEvents.error}
                buttonText="Back to yearly events"
                redirectTo="yearly-events"
            />
        )
    }

    return (
        <div className="container" id="event-section">
            <BreadCrumbs navigateToPreviousLink activeBreadcrumbTitle={publicEvents.event.title} />

            {publicEvents.loading ? (
                <div className="d-flex justify-content-center align-content-center">
                    <MoonLoader size={150} loading />
                </div>
            ) : (
                <>
                    <div className="card rounded-0 p-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <LightBoxImage
                                        image={
                                            publicEvents.event.posterImage !== ''
                                                ? publicEvents.event.posterImage
                                                : 'https://res.cloudinary.com/imagine-design-develop/image/upload/v1663793568/rackemm_images/app_images/img.png'
                                        }
                                    />
                                    {userHasValidSubscription(stripeCustomer) && (
                                        <Button
                                            className="btn btn-primary w-100 mt-3"
                                            onClick={() => handleCreateCalendarEvent(publicEvents)}
                                        >
                                            Add to calendar <FaGoogle />
                                        </Button>
                                    )}
                                </div>
                                <div className="col-md-9">
                                    <EventDetails
                                        handleRateEvent={(rating) =>
                                            handleRateEvent(rating, publicEvents.event._id)
                                        }
                                        event={publicEvents.event}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Reviews
                        createReview={createReview}
                        handleSaveReview={handleSaveReview}
                        handleDeleteReview={handleDeleteReview}
                        givenReview={givenReview}
                        handleEditReview={handleEditReview}
                        event={publicEvents.event}
                        auth={auth}
                    />
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    publicEvents: state.publicEvents,
    stripeCustomer: state.stripeCustomer,
    givenReview: state.givenReview,
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
    fetchSinglePublicEvent: (id) => dispatch(fetchSinglePublicEvent(id)),
    createReview: (rating, review, eventId) => dispatch(createReview(rating, review, eventId)),
    editReview: (rating, review, reviewId) => dispatch(editReview(rating, review, reviewId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvent)
