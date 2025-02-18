import StarRatings from 'react-star-ratings'
import '../reviews.css'
import { formatTimeForWeeklyEvent } from '../helpers'

function EventDetails({ event }) {
    return (
        <>
            <div className="row d-flex flex-row-reverse">
                <h4 className="fw-bolder mt-4 mt-sm-0 border-bottom">{event.title}</h4>
                <h6 className="fw-light mt-3">{event.description}</h6>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex flex-row justify-content-between align-middle">
                            <label className="fw-bolder">Rating</label>
                            <div className="d-flex">
                                <StarRatings
                                    rating={event.ratingsAverage}
                                    starRatedColor="gold"
                                    starHoverColor="#6c5f1a"
                                    starDimension="18px"
                                    numberOfStars={5}
                                    starSpacing="3px"
                                    name="rating"
                                />
                                <span className="ms-3">
                                    {event.ratingsQuantity} review
                                    {event.ratingsQuantity > 1 ? 's' : ''}
                                </span>
                            </div>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Venue</label>
                            <p className="mb-0 fw-light">{event.venue}</p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Time</label>
                            <p className="mb-0 fw-light">
                                {event.type === 'weekly'
                                    ? `${event.day} @ ${formatTimeForWeeklyEvent(event.startTime)}`
                                    : new Date(event.startTime).toLocaleString([], {
                                          month: '2-digit',
                                          day: '2-digit',
                                          year: '2-digit',
                                          hour: '2-digit',
                                          minute: '2-digit',
                                      })}
                            </p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Address</label>
                            <p className="mb-0 text-primary">
                                {event.address}, {event.city} {event.state}, {event.zipCode}
                            </p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Game</label>
                            <p className="m-0 fw-light">{event.game}</p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Rating System</label>
                            <p className="mb-0 fw-light">{event.ratingSystem}</p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Point of Contact</label>
                            <p className="mb-0 fw-light">{event.pointOfContact}</p>
                        </li>
                        <li className="list-group-item d-flex flex-row justify-content-between">
                            <label className="fw-bolder">Point of Contact Phone</label>
                            <p className="mb-0 fw-light">{event.pointOfContactPhone}</p>
                        </li>
                        {event.bracket && (
                            <li className="list-group-item d-flex flex-row justify-content-between">
                                <label className="fw-bolder">Bracket</label>
                                <a
                                    href={event.bracket}
                                    rel="noreferrer"
                                    target="_blank"
                                    className="mb-0 fw-light"
                                >
                                    {event.bracket}
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default EventDetails
