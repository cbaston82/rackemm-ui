import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleWeeklyEvent } from '../../redux'
import NotFound404 from './NotFound404'
import { MoonLoader } from 'react-spinners'
import poster from '../../images/poster.jpeg'

function WeeklyEvent({ allWeeklyEvents, fetchSingleWeeklyEvent }) {
    const { id } = useParams()

    useEffect(() => {
        fetchSingleWeeklyEvent(id)
    }, [fetchSingleWeeklyEvent, id])

    return (
        <div className="container">
            {allWeeklyEvents.event && !allWeeklyEvents.error ? (
                <>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/weekly-events">Weekly Events</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {allWeeklyEvents.event.title}
                            </li>
                        </ol>
                    </nav>
                    <div className="container emp-profile">
                        {allWeeklyEvents.loading ? (
                            <div className="d-flex justify-content-center align-content-center">
                                <MoonLoader size={150} loading={true} />
                            </div>
                        ) : (
                            <form method="post">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="event-img">
                                            <img src={poster} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="event-head">
                                            <h5>{allWeeklyEvents.event.title}</h5>
                                            <h6>{allWeeklyEvents.event.description}</h6>
                                            <p className="event-address">
                                                ADDRESS :{' '}
                                                <span>
                                                    {allWeeklyEvents.event.address},{' '}
                                                    {allWeeklyEvents.event.city}{' '}
                                                    {allWeeklyEvents.event.state},{' '}
                                                    {allWeeklyEvents.event.zipCode}
                                                </span>
                                            </p>
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        id="home-tab"
                                                        data-toggle="tab"
                                                        href="client/src/components/pages/WeeklyEvent#home"
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
                                    {/*<div className="col-md-2">*/}
                                    {/*    <Link*/}
                                    {/*        to={`/account/weekly-events/edit/${allWeeklyEvents.event._id}`}*/}
                                    {/*    >*/}
                                    {/*        <button className="btn btn-outline-secondary">*/}
                                    {/*            Edit Event*/}
                                    {/*        </button>*/}
                                    {/*    </Link>*/}
                                    {/*</div>*/}
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
                                                        <p>
                                                            {allWeeklyEvents.event.pointOfContact}
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
                                                                allWeeklyEvents.event
                                                                    .pointOfContactPhone
                                                            }
                                                        </p>
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
                                                        <p>
                                                            {
                                                                allWeeklyEvents.event
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
                    message={allWeeklyEvents.error}
                    buttonText={'Back to yearly events'}
                    redirectTo={'yearly-events'}
                />
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
