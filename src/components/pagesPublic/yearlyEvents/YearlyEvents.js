import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { tournamentColumns } from './yearlyEventsColumns'
import EventsTable from './EventsTable'
import { getAllYearlyEvents } from '../../../redux'
import { sortByDate } from '../../../redux/helpers/dates'
import BreadCrumbs from '../../BreadCrumbs'
import Filters from '../../Filters'
import usePageTitle from '../../../hoook/usePageTitle'
import { userHasValidSubscription } from '../../../helpers/config'

function YearlyEvents({ getAllYearlyEvents, allYearlyEvents, stripeCustomer }) {
    usePageTitle('- Yearly Events')
    const [searchParams, setSearchParams] = useSearchParams()

    const [buyIn, setBuyIn] = useState(decodeURI(searchParams.get('buyIn')))
    const [city, setCity] = useState(decodeURI(searchParams.get('city')))
    const [game, setGame] = useState(decodeURI(searchParams.get('game')))
    const [filter, setFilter] = useState(decodeURI(searchParams.get('filter')))

    const filterValues = {
        buyIn: buyIn,
        city: city,
        game: game,
        filter: filter,
    }

    useEffect(() => {
        setSearchParams({
            buyIn: buyIn,
            city: city,
            game: game,
            filter: filter,
        })
    }, [buyIn, city, game, filter, setSearchParams])

    useEffect(() => {
        getAllYearlyEvents()
    }, [getAllYearlyEvents])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <BreadCrumbs activeBreadcrumbTitle="Yearly Events" />
                {userHasValidSubscription(stripeCustomer) && (
                    <Filters
                        filterValues={filterValues}
                        filterType="yearly"
                        buttonTitle="Yearly Filters"
                    />
                )}
            </div>
            <EventsTable
                setFilter={setFilter}
                setCity={setCity}
                setGame={setGame}
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
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    getAllYearlyEvents: () => dispatch(getAllYearlyEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvents)
