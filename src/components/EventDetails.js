import StarRatings from 'react-star-ratings'
import {
    FaMapMarkerAlt,
    FaClock,
    FaGamepad,
    FaTrophy,
    FaUser,
    FaPhone,
    FaDollarSign,
    FaExternalLinkAlt,
} from 'react-icons/fa'
import '../reviews.css'
import { formatTimeForWeeklyEvent } from '../helpers'

function DetailRow({ icon, label, children }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-secondary py-3">
            <span className="text-white-50 d-flex align-items-center gap-2">
                <span className="rackemm-text-cyan">{icon}</span>
                {label}
            </span>
            <span className="text-white text-end" style={{ maxWidth: '60%' }}>
                {children}
            </span>
        </li>
    )
}

function EventDetails({ event }) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${event.address}, ${event.city} ${event.state} ${event.zipCode}`,
    )}`

    const formattedTime =
        event.type === 'weekly'
            ? `${event.day} @ ${formatTimeForWeeklyEvent(event.startTime)}`
            : `${new Date(event.startTime).toLocaleDateString([], {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
              })} · ${new Date(event.startTime).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
              })}`

    return (
        <>
            <h4 className="fw-bold text-white border-bottom border-secondary pb-3 mb-3">
                {event.title}
            </h4>
            {event.description && (
                <p className="text-white-50 fw-light mb-4">{event.description}</p>
            )}

            <ul className="list-group list-group-flush">
                <DetailRow icon={<FaDollarSign />} label="Buy-In">
                    <span className="rackemm-text-cyan fw-bold">${event.buyIn}</span>
                </DetailRow>

                <DetailRow icon={<FaClock />} label="When">
                    {formattedTime}
                </DetailRow>

                <DetailRow icon={<FaMapMarkerAlt />} label="Venue">
                    {event.venue}
                </DetailRow>

                <DetailRow icon={<FaMapMarkerAlt />} label="Address">
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rackemm-text-cyan text-decoration-none"
                    >
                        {event.address}, {event.city} {event.state} {event.zipCode}{' '}
                        <FaExternalLinkAlt size={11} />
                    </a>
                </DetailRow>

                <DetailRow icon={<FaGamepad />} label="Game">
                    {event.game}
                </DetailRow>

                <DetailRow icon={<FaTrophy />} label="Rating System">
                    {event.ratingSystem !== 'None'
                        ? event.ratingSystem
                        : 'Open / No rating required'}
                </DetailRow>

                <DetailRow icon={<FaTrophy />} label="Rating">
                    {event.ratingsQuantity > 0 ? (
                        <span className="d-flex align-items-center gap-2 justify-content-end">
                            <StarRatings
                                rating={event.ratingsAverage}
                                starRatedColor="gold"
                                starDimension="16px"
                                numberOfStars={5}
                                starSpacing="2px"
                                name="rating"
                            />
                            <span className="text-white-50" style={{ fontSize: '0.85rem' }}>
                                {event.ratingsAverage}/5 ({event.ratingsQuantity})
                            </span>
                        </span>
                    ) : (
                        <span className="text-white-50 fst-italic" style={{ fontSize: '0.85rem' }}>
                            No ratings yet
                        </span>
                    )}
                </DetailRow>

                <DetailRow icon={<FaUser />} label="Contact">
                    {event.pointOfContact}
                </DetailRow>

                <DetailRow icon={<FaPhone />} label="Phone">
                    <a
                        href={`tel:${event.pointOfContactPhone}`}
                        className="rackemm-text-cyan text-decoration-none"
                    >
                        {event.pointOfContactPhone}
                    </a>
                </DetailRow>

                {event.bracket && (
                    <DetailRow icon={<FaExternalLinkAlt />} label="Bracket">
                        <a
                            href={event.bracket}
                            rel="noreferrer"
                            target="_blank"
                            className="rackemm-text-cyan text-decoration-none"
                        >
                            View Bracket <FaExternalLinkAlt size={11} />
                        </a>
                    </DetailRow>
                )}
            </ul>
        </>
    )
}

export default EventDetails
