import { useEffect } from 'react'
import { connect } from 'react-redux'
import { FaArrowCircleRight } from 'react-icons/fa'
import UpcomingSpecialEventCard from './UpcomingSpecialEventCard'
import { getAllPublicEvents } from '../../../redux'
import Button from '../../Button'

function UpcomingEventsSection({ getAllPublicEvents, publicEvents }) {
    useEffect(() => {
        getAllPublicEvents('special')
    }, [getAllPublicEvents])

    return (
        <div className="py-5 rackemm-hero-3">
            <div className="container">
                <div className="text-center text-white mb-5">
                    <h4>
                        <strong>Upcoming Tournaments</strong>
                    </h4>
                </div>

                <div className="row">
                    {publicEvents.events &&
                        publicEvents.events
                            .filter((event) => new Date(event.startTime) >= Date.now())
                            .filter((event) => event.status === 'active')
                            .sort((a, b) => new Date(a.startTime) - new Date(b.startTime))
                            .slice(0, 6)
                            .map((event) => (
                                <UpcomingSpecialEventCard key={event._id} event={event} />
                            ))}
                </div>
                <div className="row text-center">
                    <Button
                        className="btn btn-outline-warning btn-lg"
                        path="/special-events"
                        buttonText="View All"
                    >
                        <FaArrowCircleRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    publicEvents: state.publicEvents,
})

const mapDispatchToProps = (dispatch) => ({
    getAllPublicEvents: (type) => dispatch(getAllPublicEvents(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEventsSection)
