import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleWeeklyEvent } from '../../redux'
import NotFound404 from './NotFound404'
import { MoonLoader } from 'react-spinners'
import LightBoxImage from '../LightBoxImage'
import BreadCrumbs from '../BreadCrumbs'

function WeeklyEvent({ allWeeklyEvents, fetchSingleWeeklyEvent }) {
    const { id } = useParams()

    useEffect(() => {
        fetchSingleWeeklyEvent(id)
    }, [fetchSingleWeeklyEvent, id])

    if (allWeeklyEvents.event && allWeeklyEvents.error) {
        return (
            <NotFound404
                message={allWeeklyEvents.error}
                buttonText={'Back to weekly events'}
                redirectTo={'weekly-events'}
            />
        )
    }

    return (
        <div className="container" id="event-section">
            <BreadCrumbs
                navigateToPreviousLink={true}
                activeBreadcrumbTitle={allWeeklyEvents.event.title}
            />

            {allWeeklyEvents.loading ? (
                <div className="d-flex justify-content-center align-content-center">
                    <MoonLoader size={150} loading={true} />
                </div>
            ) : (
                <div className="card rounded-0 p-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="text-center">
                                    <LightBoxImage image={allWeeklyEvents.event.posterImage} />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <h5>{allWeeklyEvents.event.title}</h5>
                                <h6 className="text-info">{allWeeklyEvents.event.description}</h6>
                                <p className="mt-3 fa-spin-pulse text-black-50">
                                    ADDRESS :{' '}
                                    <span>
                                        {allWeeklyEvents.event.address},{' '}
                                        {allWeeklyEvents.event.city} {allWeeklyEvents.event.state},{' '}
                                        {allWeeklyEvents.event.zipCode}
                                    </span>
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Game</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allWeeklyEvents.event.game}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Rating System</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allWeeklyEvents.event.ratingSystem}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Venue</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allWeeklyEvents.event.venue}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Point of Contact</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allWeeklyEvents.event.pointOfContact}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Point of Contact Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allWeeklyEvents.event.pointOfContactPhone}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Day</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allWeeklyEvents.event.day}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Point of Contact Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{allWeeklyEvents.event.pointOfContactPhone}</p>
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
    allWeeklyEvents: state.allWeeklyEvents,
})

const mapDispatchToProps = (dispatch) => ({
    fetchSingleWeeklyEvent: (id) => dispatch(fetchSingleWeeklyEvent(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvent)
