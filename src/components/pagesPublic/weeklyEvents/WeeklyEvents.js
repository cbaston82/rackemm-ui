import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { tournamentColumns } from './weeklyEventsColumns'
import EventsTable from './EventsTable'
import { getAllWeeklyEvents } from '../../../redux'
import { useSearchParams } from 'react-router-dom'
import { sortByDayInWeek } from '../../../redux/helpers/dates'
import BreadCrumbs from '../../BreadCrumbs'
import Filters from '../../Filters'
import usePageTitle from '../../../hoook/usePageTitle'

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
        getAllWeeklyEvents()
        setSearchParams({
            buyIn: buyIn,
            city: city,
            day: day,
            game: game,
            filter: filter,
        })
    }, [filter, buyIn, day, city, game, getAllWeeklyEvents, setSearchParams])

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <BreadCrumbs activeBreadcrumbTitle="Weekly Events" />
                {auth.user.email && (
                    <Filters
                        filterValues={filterValues}
                        filterType="weekly"
                        buttonTitle="Weekly Filters"
                    />
                )}
            </div>
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
