import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { tournamentColumns } from '../tables/weeklyEventsColumns'
import EventsTable from '../tables/EventsTable'
import { getAllWeeklyEvents } from '../../redux'
import { useSearchParams } from 'react-router-dom'
import { sortByDayInWeek } from '../../redux/helpers/dates'

function WeeklyEvents({ getAllWeeklyEvents, allWeeklyEvents }) {
    const [searchParams, setSearchParams] = useSearchParams()

    const [buyIn, setBuyIn] = useState(decodeURI(searchParams.get('buyIn')))
    const [city, setCity] = useState(decodeURI(searchParams.get('city')))
    const [filter, setFilter] = useState(decodeURI(searchParams.get('filter')))

    const filterValues = {
        buyIn: buyIn,
        city: city,
        filter: filter,
    }

    useEffect(() => {
        getAllWeeklyEvents()
        setSearchParams({
            buyIn: buyIn,
            city: city,
            filter: filter,
        })
    }, [filter, buyIn, city, getAllWeeklyEvents, setSearchParams])

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Weekly Events</li>
                </ol>
            </nav>
            <EventsTable
                setBuyIn={setBuyIn}
                setCity={setCity}
                setFilter={setFilter}
                filterValues={filterValues}
                loaderMessage="Fetching Weekly WeeklyEvents..."
                tournamentColumns={tournamentColumns}
                events={sortByDayInWeek(allWeeklyEvents.events)}
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    allWeeklyEvents: state.allWeeklyEvents,
})

const mapDispatchToProps = (dispatch) => ({
    getAllWeeklyEvents: () => dispatch(getAllWeeklyEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvents)
