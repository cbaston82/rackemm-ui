import DataTable from 'react-data-table-component'
import { useEffect, useMemo, useState } from 'react'
import CustomLoader from '../../CustomeLoader'
import FilterComponent from './Filter'
import '../../SolarizedTheme'

function EventsTable({
    loaderMessage,
    tournamentColumns,
    events,
    filterValues,
    setBuyIn,
    setFilter,
    setCity,
    setGame,
    setDay,
}) {
    tournamentColumns[0].defaultExpanded = true

    const tournamentBuyInsArray = events.map((item) => item.buyIn)
    const minBuyIn = Math.min(...tournamentBuyInsArray).toString()
    const maxBuyIn = Math.max(...tournamentBuyInsArray).toString()

    const tournamentCitiesInArray = events.map((item) => item.city)
    const gamesInArray = events.map((item) => item.game)
    const daysInArray = events.map((item) => item.day)

    const cities = useMemo(() => [...new Set(tournamentCitiesInArray)], [tournamentCitiesInArray])

    const games = useMemo(() => [...new Set(gamesInArray)], [gamesInArray])

    const days = useMemo(() => [...new Set(daysInArray)], [daysInArray])

    const [pending, setPending] = useState(true)
    const [rows, setRows] = useState([])
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
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

    const filteredItems = rows.filter(
        (item) =>
            (item.title &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.title.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.description &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.description
                    .replace(/[\r\n]/gm, ' ')
                    .toLowerCase()
                    .includes(filterText.toLowerCase())) ||
            (item.pointOfContact &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.pointOfContact.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.venue &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.venue.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.day &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.day.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.state &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.state.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.zipCode &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.zipCode.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.time &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.time.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.game &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.game.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.city &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                (filterDay !== 'all'
                    ? item.day.toLowerCase().includes(filterDay.toLowerCase())
                    : item.day.toLowerCase()) &&
                item.city.toLowerCase().includes(filterText.toLowerCase())),
    )

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            setResetPaginationToggle(!resetPaginationToggle)
            setFilter('')
            setCity('all')
            setGame('all')
            setDay('all')
            setBuyIn(maxBuyIn)
            setFilterText('')
            setFilterCity('all')
            setFilterBuyIn(maxBuyIn)
            setFilterGame('all')
            setFilterDay('all')
        }

        const handlePriceChange = (e) => {
            const buyIn = e.target.value
            setBuyIn(buyIn)
            setFilterBuyIn(buyIn)
        }

        const handleCityChange = (e) => {
            const city = e.target.value
            setFilterCity(city)
            setCity(city)
        }

        const handleGameChange = (e) => {
            const game = e.target.value
            setFilterGame(game)
            setGame(game)
        }

        const handleDayChange = (e) => {
            const day = e.target.value
            setFilterDay(day)
            setDay(day)
        }

        const handleFilterChange = (e) => {
            setFilterText(e.target.value)
            setFilter(e.target.value)
        }
        return (
            <>
                {!pending ? (
                    <FilterComponent
                        onFilter={(e) => handleFilterChange(e)}
                        onGameChange={handleGameChange}
                        onClear={handleClear}
                        onPriceChange={handlePriceChange}
                        onDayChange={handleDayChange}
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
                ) : null}
            </>
        )
    }, [
        pending,
        maxBuyIn,
        minBuyIn,
        resetPaginationToggle,
        filterText,
        filterCity,
        filterDay,
        filterBuyIn,
        filterGame,
        cities,
        games,
        days,
        setCity,
        setDay,
        setGame,
        setBuyIn,
        setFilter,
    ])

    useEffect(() => {
        setRows(events)
        setPending(false)
    }, [events, setRows, setPending])

    return (
        <DataTable
            theme="rackemm_theme"
            columns={tournamentColumns}
            data={filteredItems}
            progressPending={pending}
            progressComponent={
                pending && <CustomLoader color="white" loaderMessage={loaderMessage} />
            }
            paginationResetDefaultPage={resetPaginationToggle}
            subHeaderComponent={subHeaderComponentMemo}
            subHeader
            pagination
        />
    )
}

export default EventsTable
