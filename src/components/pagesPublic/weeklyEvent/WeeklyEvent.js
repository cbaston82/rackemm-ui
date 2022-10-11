import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import { fetchSinglePublicEvent } from '../../../redux'
import NotFound404 from '../NotFound404'
import LightBoxImage from '../../LightBoxImage'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'
import EventDetails from '../../EventDetails'
import WeeklyEventsResultsTable from '../../WeeklyEventsResultsTable'
import useRateEventSwalModal from '../../../hoook/useRateEventSwalModal'
import Reviews from '../../Reviews'
import useDeleteReviewSwalModal from '../../../hoook/useDeleteReviewSwalModal'

function WeeklyEvent({ publicEvents, fetchSinglePublicEvent, auth }) {
    usePageTitle('- Weekly Event')
    const [rateEvent] = useRateEventSwalModal(auth)
    const [handleDeleteReview] = useDeleteReviewSwalModal(auth)
    const { id } = useParams()

    useEffect(() => {
        fetchSinglePublicEvent(id)
    }, [fetchSinglePublicEvent, id])

    if (publicEvents.event && publicEvents.error) {
        return (
            <NotFound404
                message={publicEvents.error}
                buttonText="Back to weekly events"
                redirectTo="weekly-events"
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
                                </div>
                                <div className="col-md-9">
                                    <EventDetails
                                        rateEvent={(rating) =>
                                            rateEvent(rating, auth, publicEvents.event._id)
                                        }
                                        event={publicEvents.event}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <WeeklyEventsResultsTable />
                    <Reviews
                        handleDeleteReview={handleDeleteReview}
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
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
    fetchSinglePublicEvent: (id) => dispatch(fetchSinglePublicEvent(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvent)
