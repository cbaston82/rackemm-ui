import { useEffect, useMemo, useState } from 'react'
import ReactPaginate from 'react-paginate'
import CustomLoader from '../../CustomeLoader'
import FilterComponent from './Filter'
import WeeklyEventCard from './WeeklyEventCard'

const ITEMS_PER_PAGE = 12

function EventsTable({
    loaderMessage,
    events,
    filterValues,
    setBuyIn,
    setFilter,
    setCity,
    setGame,
    setDay,
}) {
    const tournamentBuyInsArray = events.map((item) => item.buyIn)
    const minBuyIn = Math.min(...tournamentBuyInsArray).toString()
    const maxBuyIn = Math.max(...tournamentBuyInsArray).toString()

    const cities = useMemo(() => [...new Set(events.map((item) => item.city))], [events])
    const games = useMemo(() => [...new Set(events.map((item) => item.game))], [events])
    const days = useMemo(() => [...new Set(events.map((item) => item.day))], [events])

    const [pending, setPending] = useState(true)
    const [rows, setRows] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [filterText, setFilterText] = useState(
        filterValues.filter !== 'null' ? filterValues.filter : '',
    )
    const [filterBuyIn, setFilterBuyIn] = useState(
        filterValues.buyIn !== 'null' ? filterValues.buyIn : maxBuyIn,
    )
    const [filterCity, setFilterCity] = useState(
        filterValues.city !== 'null' ? filterValues.city : 'all',
    )
    const [filterGame, setFilterGame] = useState(
        filterValues.game !== 'null' ? filterValues.game : 'all',
    )
    const [filterDay, setFilterDay] = useState(
        filterValues.day !== 'null' ? filterValues.day : 'all',
    )

    const filteredItems = rows.filter(
        (item) =>
            parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
            (filterCity !== 'all'
                ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                : true) &&
            (filterGame !== 'all'
                ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                : true) &&
            (filterDay !== 'all'
                ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                : true) &&
            (filterText === '' ||
                [
                    item.title,
                    item.description,
                    item.venue,
                    item.city,
                    item.state,
                    item.game,
                    item.day,
                ]
                    .filter(Boolean)
                    .some((field) =>
                        field
                            .replace(/[\r\n]/gm, ' ')
                            .toLowerCase()
                            .includes(filterText.toLowerCase()),
                    )),
    )

    const pageCount = Math.ceil(filteredItems.length / ITEMS_PER_PAGE)
    const offset = currentPage * ITEMS_PER_PAGE
    const currentItems = filteredItems.slice(offset, offset + ITEMS_PER_PAGE)

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleClear = () => {
        setFilterBuyIn(maxBuyIn)
        setFilterGame('all')
        setFilterText('')
        setFilterCity('all')
        setFilterDay('all')
        setFilter('')
        setCity('all')
        setGame('all')
        setDay('all')
        setBuyIn(maxBuyIn)
        setCurrentPage(0)
    }

    const handlePriceChange = (e) => {
        setBuyIn(e.target.value)
        setFilterBuyIn(e.target.value)
        setCurrentPage(0)
    }

    const handleCityChange = (e) => {
        setFilterCity(e.target.value)
        setCity(e.target.value)
        setCurrentPage(0)
    }

    const handleGameChange = (e) => {
        setFilterGame(e.target.value)
        setGame(e.target.value)
        setCurrentPage(0)
    }

    const handleDayChange = (e) => {
        setFilterDay(e.target.value)
        setDay(e.target.value)
        setCurrentPage(0)
    }

    const handleFilterChange = (e) => {
        setFilterText(e.target.value)
        setFilter(e.target.value)
        setCurrentPage(0)
    }

    useEffect(() => {
        setRows(events)
        setPending(false)
    }, [events])

    if (pending) {
        return <CustomLoader color="white" loaderMessage={loaderMessage} />
    }

    return (
        <div>
            <FilterComponent
                onFilter={handleFilterChange}
                onGameChange={handleGameChange}
                onDayChange={handleDayChange}
                onClear={handleClear}
                onPriceChange={handlePriceChange}
                onCityChange={handleCityChange}
                minBuyIn={minBuyIn}
                maxBuyIn={maxBuyIn}
                cities={cities}
                games={games}
                days={days}
                filterGame={filterGame}
                filterDay={filterDay}
                filterBuyIn={filterBuyIn}
                filterText={filterText}
                filterCity={filterCity}
            />

            <p className="text-white-50 mt-3 mb-4" style={{ fontSize: '0.875rem' }}>
                {filteredItems.length} tournament{filteredItems.length !== 1 ? 's' : ''} found
            </p>

            {currentItems.length > 0 ? (
                <div className="row">
                    {currentItems.map((event) => (
                        <WeeklyEventCard key={event._id} event={event} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-5">
                    <p className="text-white-50 fst-italic">No tournaments match your filters.</p>
                    <button
                        type="button"
                        className="btn btn-outline-warning btn-sm mt-2"
                        onClick={handleClear}
                    >
                        Clear filters
                    </button>
                </div>
            )}

            {pageCount > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        previousLabel="< previous"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        forcePage={currentPage}
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        activeClassName="active"
                    />
                </div>
            )}
        </div>
    )
}

export default EventsTable
