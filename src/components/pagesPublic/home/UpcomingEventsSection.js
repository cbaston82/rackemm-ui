import { useEffect } from 'react'
import { connect } from 'react-redux'
import UpcomingYearlyEventCard from './UpcomingYearlyEventCard'
import { getAllYearlyEvents } from '../../../redux'

function UpcomingEventsSection({ getAllYearlyEvents, allYearlyEvents }) {
    useEffect(() => {
        getAllYearlyEvents()
    }, [getAllYearlyEvents])

    return (
        <section className="my-5 py-5" id="upcoming-events-section">
            <div className="container">
                <div className="text-center text-white mb-5">
                    <h4>
                        <strong>Upcoming Tournaments</strong>
                    </h4>
                </div>

                <div className="row">
                    {allYearlyEvents.events &&
                        allYearlyEvents.events
                            .filter((event) => new Date(event.startDate) > new Date())
                            .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
                            .slice(0, 6)
                            .map((event) => (
                                <UpcomingYearlyEventCard key={event._id} event={event} />
                            ))}
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    allYearlyEvents: state.allYearlyEvents,
})

const mapDispatchToProps = (dispatch) => ({
    getAllYearlyEvents: () => dispatch(getAllYearlyEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEventsSection)
