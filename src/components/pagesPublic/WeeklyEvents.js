import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { tournamentColumns } from '../tables/weeklyEventsColumns'
import EventsTable from '../tables/EventsTable'
import { getAllWeeklyEvents, getSavedFilters } from '../../redux'
import { useSearchParams } from 'react-router-dom'
import { sortByDayInWeek } from '../../redux/helpers/dates'
import BreadCrumbs from '../BreadCrumbs'
import Filters from '../Filters'

function WeeklyEvents({ getAllWeeklyEvents, allWeeklyEvents, getSavedFilters, savedFilters }) {
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
        getSavedFilters()
    }, [getSavedFilters])

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
            <div className="d-flex justify-content-between">
                <BreadCrumbs activeBreadcrumbTitle="Weekly Events" />
                <Filters
                    type="weekly"
                    buttonTitle="Weekly Filters"
                    filters={savedFilters.filters}
                />
            </div>
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
    savedFilters: state.filters,
})

const mapDispatchToProps = (dispatch) => ({
    getAllWeeklyEvents: () => dispatch(getAllWeeklyEvents()),
    getSavedFilters: () => dispatch(getSavedFilters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvents)
