import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { tournamentColumns } from './yearlyEventsColumns'
import EventsTable from './EventsTable'
import { getAllPublicEvents } from '../../../redux'
import { sortByDate } from '../../../redux/helpers/dates'
import BreadCrumbs from '../../BreadCrumbs'
import Filters from '../../Filters'
import usePageTitle from '../../../hoook/usePageTitle'

function YearlyEvents({ getAllPublicEvents, publicEvents }) {
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
        getAllPublicEvents('yearly')
    }, [getAllPublicEvents])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <BreadCrumbs activeBreadcrumbTitle="Special Events" />
                <Filters
                    filterValues={filterValues}
                    filterType="yearly"
                    buttonTitle="Special Event Filters"
                />
            </div>
            {!publicEvents.loading && (
                <EventsTable
                    setFilter={setFilter}
                    setCity={setCity}
                    setGame={setGame}
                    setBuyIn={setBuyIn}
                    filterValues={filterValues}
                    loaderMessage="Fetching Special Events..."
                    tournamentColumns={tournamentColumns}
                    events={sortByDate(publicEvents.events).filter(
                        (event) => event.status === 'active',
                    )}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    publicEvents: state.publicEvents,
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    getAllPublicEvents: (type) => dispatch(getAllPublicEvents(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(YearlyEvents)
