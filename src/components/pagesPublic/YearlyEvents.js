import { useEffect, useState } from 'react'
import { tournamentColumns } from '../tables/yearlyEventsColumns'
import EventsTable from '../tables/EventsTable'
import { getAllYearlyEvents, getSavedFilters } from '../../redux'
import { connect } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { sortByDate } from '../../redux/helpers/dates'
import BreadCrumbs from '../BreadCrumbs'
import Filters from '../Filters'

function YearlyEvents({ getAllYearlyEvents, allYearlyEvents, getSavedFilters, savedFilters }) {
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
    }, [buyIn, city, filter, setSearchParams, getAllYearlyEvents])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <BreadCrumbs activeBreadcrumbTitle="Yearly Events" />
                <Filters
                    type="yearly"
                    buttonTitle="Yearly filters"
                    filters={savedFilters.filters}
                />
            </div>
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
    savedFilters: state.filters,
})

const mapDispatchToProps = (dispatch) => ({
    getAllYearlyEvents: () => dispatch(getAllYearlyEvents()),
    getSavedFilters: () => dispatch(getSavedFilters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvents)
