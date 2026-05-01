import { FaArrowCircleRight, FaMapMarkerAlt, FaDollarSign, FaBullseye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings/build/star-ratings'
import { formatTimeForWeeklyEvent } from '../../../helpers'

function WeeklyEventCard({ event }) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card rackemm-card h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <span className="text-black fw-semibold">
                        <FaMapMarkerAlt className="me-1" />
                        {event.city}, {event.state}
                    </span>
                    <span
                        className="badge text-black fw-semibold"
                        style={{ backgroundColor: 'var(--cyan)', fontSize: '0.7rem' }}
                    >
                        {event.game}
                    </span>
                </div>
                <div className="card-body d-flex flex-column gap-3">
                    <h5 className="card-title text-white mb-0">{event.title}</h5>
                    <p className="text-white-50 fw-light mb-0" style={{ fontSize: '0.875rem' }}>
                        {event.venue}
                    </p>
                    <div className="d-flex justify-content-between">
                        <span className="text-white-50" style={{ fontSize: '0.875rem' }}>
                            <FaDollarSign className="rackemm-text-cyan" />
                            <span className="text-white fw-bold">{event.buyIn}</span> buy-in
                        </span>
                        <span className="text-white-50" style={{ fontSize: '0.875rem' }}>
                            <FaBullseye className="rackemm-text-cyan me-1" />
                            {event.ratingSystem !== 'None' ? event.ratingSystem : 'Open'}
                        </span>
                    </div>
                    {event.ratingsQuantity > 0 ? (
                        <div>
                            <StarRatings
                                rating={event.ratingsAverage}
                                starRatedColor="gold"
                                starDimension="14px"
                                numberOfStars={5}
                                starSpacing="1px"
                                name="rating"
                            />
                            <span className="text-white-50 ms-2" style={{ fontSize: '0.8rem' }}>
                                {event.ratingsAverage}/5 ({event.ratingsQuantity})
                            </span>
                        </div>
                    ) : (
                        <span className="text-white-50 fst-italic" style={{ fontSize: '0.8rem' }}>
                            No ratings yet
                        </span>
                    )}
                    <div className="mt-auto">
                        <Link
                            to={`/event/${event._id}`}
                            className="btn btn-sm btn-outline-warning w-100"
                        >
                            View Details <FaArrowCircleRight />
                        </Link>
                    </div>
                </div>
                <div className="card-footer text-black fw-semibold" style={{ fontSize: '0.85rem' }}>
                    {event.day} &middot; {formatTimeForWeeklyEvent(event.startTime)}
                </div>
            </div>
        </div>
    )
}

export default WeeklyEventCard
