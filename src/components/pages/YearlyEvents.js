import { useEffect, useState } from 'react'
import { tournamentColumns } from '../tables/yearlyEventsColumns'
import EventsTable from '../tables/EventsTable'
import { getAllYearlyEvents } from '../../redux'
import { connect } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { sortByDate } from '../../redux/helpers/dates'

function YearlyEvents({ getAllYearlyEvents, allYearlyEvents }) {
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
        getAllYearlyEvents()
        setSearchParams({
            buyIn: buyIn,
            city: city,
            filter: filter,
        })
    }, [buyIn, city, filter])

    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Yearly Events</li>
                </ol>
            </nav>
            <EventsTable
                setFilter={setFilter}
                setCity={setCity}
                setBuyIn={setBuyIn}
                filterValues={filterValues}
                loaderMessage="Fetching Special Events..."
                tournamentColumns={tournamentColumns}
                events={sortByDate(allYearlyEvents.events)}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    allYearlyEvents: state.allYearlyEvents,
})

const mapDispatchToProps = (dispatch) => ({
    getAllYearlyEvents: () => dispatch(getAllYearlyEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvents)
