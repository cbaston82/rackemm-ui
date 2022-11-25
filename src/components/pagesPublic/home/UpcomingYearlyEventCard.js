import { FaArrowCircleRight, FaMapPin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings/build/star-ratings'

function UpcomingYearlyEventCard({ event }) {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card text-center mb-4 rackemm-card">
                <div className="card-header">
                    <span className="fw-bold text-black-50">
                        <FaMapPin /> {event.city}
                    </span>
                </div>
                <div className="card-body">
                    <div className="d-flex flex-column justify-content-between gap-3">
                        <h5 className="card-title text-white">{event.title}</h5>
                        <div className="px-5">
                            <div className="d-flex flex-md-row justify-content-between">
                                <div>
                                    <span className="text-white fw-bold">Buyin: </span>
                                    <span className="text-white-50">${event.buyIn}</span>
                                </div>
                                <div>
                                    <span className="text-white fw-bold">Game: </span>
                                    <span className="text-white-50">{event.game}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <StarRatings
                                rating={event.ratingsAverage}
                                starRatedColor="gold"
                                starDimension="15px"
                                numberOfStars={5}
                                starSpacing="1px"
                                name="rating"
                            />
                            <p className="text-white-50 fw-light fst-italic">
                                {event.ratingsAverage}/5 ({event.ratingsQuantity})
                            </p>
                        </div>
                        <div>
                            <Link
                                to={`/event/${event._id}`}
                                className="btn btn-sm btn-outline-secondary"
                            >
                                View Details <FaArrowCircleRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-black fw-light">
                    {new Date(event.startTime).toLocaleString([], {
                        month: '2-digit',
                        day: '2-digit',
                        year: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </div>
            </div>
        </div>
    )
}

export default UpcomingYearlyEventCard
