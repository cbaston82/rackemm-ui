import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { tournamentColumns } from './weeklyEventsColumns'
import EventsTable from './EventsTable'
import { getAllWeeklyEvents } from '../../../redux'
import { useSearchParams } from 'react-router-dom'
import { sortByDayInWeek } from '../../../redux/helpers/dates'
import usePageTitle from '../../../hoook/usePageTitle'
import BreadCrumbsWilFilters from '../../BreadCrumbsWilFilters'

function WeeklyEvents({ auth, getAllWeeklyEvents, allWeeklyEvents }) {
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
        getAllWeeklyEvents()
    }, [getAllWeeklyEvents])

    return (
        <div className="container">
            <BreadCrumbsWilFilters filterValues={filterValues} auth={auth} />
            <EventsTable
                setBuyIn={setBuyIn}
                setCity={setCity}
                setGame={setGame}
                setDay={setDay}
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
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
    getAllWeeklyEvents: () => dispatch(getAllWeeklyEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyEvents)
