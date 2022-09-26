import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleWeeklyEvent } from '../../redux'
import NotFound404 from './NotFound404'
import { MoonLoader } from 'react-spinners'
import LightBoxImage from '../LightBoxImage'
import BreadCrumbs from '../BreadCrumbs'
import usePageTitle from '../../hoook/usePageTitle'

function WeeklyEvent({ allWeeklyEvents, fetchSingleWeeklyEvent }) {
    usePageTitle('- Weekly Event')
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
                                    <LightBoxImage
                                        image={
                                            allWeeklyEvents.event.posterImage.length
                                                ? allWeeklyEvents.event.posterImage
                                                : 'https://res.cloudinary.com/imagine-design-develop/image/upload/v1663793568/rackemm_images/app_images/img.png'
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row d-flex flex-row-reverse">
                                    <h4 className="fw-bolder">{allWeeklyEvents.event.title}</h4>
                                    <h6 className="fw-light mt-3">
                                        {allWeeklyEvents.event.description}
                                    </h6>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-12">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">Venue</label>
                                                <p className="mb-0 fw-light">
                                                    {allWeeklyEvents.event.venue}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">Address</label>
                                                <p className="mb-0 text-primary">
                                                    {allWeeklyEvents.event.address},{' '}
                                                    {allWeeklyEvents.event.city}{' '}
                                                    {allWeeklyEvents.event.state},{' '}
                                                    {allWeeklyEvents.event.zipCode}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">Game</label>
                                                <p className="m-0 fw-light">
                                                    {allWeeklyEvents.event.game}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">Rating System</label>
                                                <p className="mb-0 fw-light">
                                                    {allWeeklyEvents.event.ratingSystem}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">
                                                    Point of Contact
                                                </label>
                                                <p className="mb-0 fw-light">
                                                    {allWeeklyEvents.event.pointOfContact}
                                                </p>
                                            </li>
                                            <li className="list-group-item d-flex flex-row justify-content-between">
                                                <label className="fw-bolder">
                                                    Point of Contact Phone
                                                </label>
                                                <p className="mb-0 fw-light">
                                                    {allWeeklyEvents.event.pointOfContactPhone}
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
    allWeeklyEvents: state.allWeeklyEvents,
})

const mapDispatchToProps = (dispatch) => ({
    fetchSingleWeeklyEvent: (id) => dispatch(fetchSingleWeeklyEvent(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvent)
