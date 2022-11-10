import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { tournamentColumns } from './weeklyEventsColumns'
import EventsTable from './EventsTable'
import { getAllPublicEvents } from '../../../redux'
import { sortByDayInWeek } from '../../../redux/helpers/dates'
import usePageTitle from '../../../hoook/usePageTitle'
import BreadCrumbs from '../../BreadCrumbs'
import Filters from '../../Filters'

function WeeklyEvents({ getAllPublicEvents, publicEvents }) {
    usePageTitle('- Weekly Events')
    const [searchParams, setSearchParams] = useSearchParams()
    const [buyIn, setBuyIn] = useState(decodeURI(searchParams.get('buyIn')))
    const [city, setCity] = useState(decodeURI(searchParams.get('city')))
    const [game, setGame] = useState(decodeURI(searchParams.get('game')))
    const [day, setDay] = useState(decodeURI(searchParams.get('day')))
    const [filter, setFilter] = useState(decodeURI(searchParams.get('filter')))

    const filterValues = {
        buyIn: buyIn,
        game: game,
        city: city,
        day: day,
        filter: filter,
    }
    useEffect(() => {
        setSearchParams({
            buyIn: buyIn,
            city: city,
            day: day,
            game: game,
            filter: filter,
        })
    }, [buyIn, city, game, day, filter, setSearchParams])

    useEffect(() => {
        getAllPublicEvents('weekly')
    }, [getAllPublicEvents])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <BreadCrumbs activeBreadcrumbTitle="Yearly Events" />
                <Filters
                    filterValues={filterValues}
                    filterType="weekly"
                    buttonTitle="Weekly Filters"
                />
            </div>
            {!publicEvents.loading && (
                <EventsTable
                    setBuyIn={setBuyIn}
                    setCity={setCity}
                    setGame={setGame}
                    setDay={setDay}
                    setFilter={setFilter}
                    filterValues={filterValues}
                    loaderMessage="Fetching Weekly WeeklyEvents..."
                    tournamentColumns={tournamentColumns}
                    events={sortByDayInWeek(publicEvents.events)}
                />
            )}
        </div>
    )
}
const mapStateToProps = (state) => ({
    publicEvents: state.publicEvents,
    auth: state.auth,
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    getAllPublicEvents: (type) => dispatch(getAllPublicEvents(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvents)
