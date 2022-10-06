import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import { fetchSingleWeeklyEvent } from '../../../redux'
import NotFound404 from '../NotFound404'
import LightBoxImage from '../../LightBoxImage'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'
import EventDetails from '../../EventDetails'
import WeeklyEventsResultsTable from '../../WeeklyEventsResultsTable'
import useRateEventSwalModal from '../../../hoook/useRateEventSwalModal'

function WeeklyEvent({ allWeeklyEvents, fetchSingleWeeklyEvent, auth }) {
    usePageTitle('- Weekly Event')
    const [rateEvent] = useRateEventSwalModal(auth)
    const { id } = useParams()

    useEffect(() => {
        fetchSingleWeeklyEvent(id)
    }, [fetchSingleWeeklyEvent, id])

    if (allWeeklyEvents.event && allWeeklyEvents.error) {
        return (
            <NotFound404
                message={allWeeklyEvents.error}
                buttonText="Back to weekly events"
                redirectTo="weekly-events"
            />
        )
    }

    return (
        <div className="container" id="event-section">
            <BreadCrumbs
                navigateToPreviousLink
                activeBreadcrumbTitle={allWeeklyEvents.event.title}
            />

            {allWeeklyEvents.loading ? (
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
                                        allWeeklyEvents.event.posterImage !== ''
                                            ? allWeeklyEvents.event.posterImage
                                            : 'https://res.cloudinary.com/imagine-design-develop/image/upload/v1663793568/rackemm_images/app_images/img.png'
                                    }
                                />
                            </div>
                            <div className="col-md-9">
                                <EventDetails
                                    rateEvent={(rating) =>
                                        rateEvent(rating, auth, allWeeklyEvents.event._id)
                                    }
                                    event={allWeeklyEvents.event}
                                />

                                <WeeklyEventsResultsTable />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    allWeeklyEvents: state.allWeeklyEvents,
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
    fetchSingleWeeklyEvent: (id) => dispatch(fetchSingleWeeklyEvent(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvent)
