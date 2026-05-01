import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import EventsTable from './EventsTable'
import { getAllPublicEvents } from '../../../redux'
import { sortByDayInWeek } from '../../../redux/helpers/dates'
import usePageTitle from '../../../hoook/usePageTitle'
import BreadCrumbs from '../../BreadCrumbs'

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
            <BreadCrumbs activeBreadcrumbTitle="Weekly Events" />
            <div className="mb-4">
                <h2 className="text-white fw-bold mb-1">Weekly Tournaments</h2>
                <p className="text-white-50 mb-0">
                    Recurring pool tournaments sorted by day of the week.
                </p>
            </div>
            {!publicEvents.loading && (
                <EventsTable
                    setBuyIn={setBuyIn}
                    setCity={setCity}
                    setGame={setGame}
                    setDay={setDay}
                    setFilter={setFilter}
                    filterValues={filterValues}
                    loaderMessage="Fetching Weekly Events..."
                    events={sortByDayInWeek(publicEvents.events).filter(
                        (event) => event.status === 'active',
                    )}
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
