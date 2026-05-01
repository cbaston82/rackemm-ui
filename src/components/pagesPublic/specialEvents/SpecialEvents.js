import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import EventsTable from './EventsTable'
import { getAllPublicEvents } from '../../../redux'
import { sortByDate } from '../../../redux/helpers/dates'
import BreadCrumbs from '../../BreadCrumbs'
import usePageTitle from '../../../hoook/usePageTitle'

function SpecialEvents({ getAllPublicEvents, publicEvents }) {
    usePageTitle('- Special Events')
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
        getAllPublicEvents('special')
    }, [getAllPublicEvents])

    return (
        <div className="container">
            <BreadCrumbs activeBreadcrumbTitle="Special Events" />
            <div className="mb-4">
                <h2 className="text-white fw-bold mb-1">Upcoming Tournaments</h2>
                <p className="text-white-50 mb-0">Browse and filter pool tournaments near you.</p>
            </div>
            {!publicEvents.loading && (
                <EventsTable
                    setFilter={setFilter}
                    setCity={setCity}
                    setGame={setGame}
                    setBuyIn={setBuyIn}
                    filterValues={filterValues}
                    loaderMessage="Fetching Special Events..."
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

export default connect(mapStateToProps, mapDispatchToProps)(SpecialEvents)
