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
}) {
    tournamentColumns[0].defaultExpanded = true
    const tournamentBuyInsArray = events.map((item) => item.buyIn)
    const minBuyIn = Math.min(...tournamentBuyInsArray).toString()
    const maxBuyIn = Math.max(...tournamentBuyInsArray).toString()

    const tournamentCitiesInArray = events.map((item) => item.city)
    const gamesInArray = events.map((item) => item.game)

    const cities = useMemo(() => [...new Set(tournamentCitiesInArray)], [tournamentCitiesInArray])

    const games = useMemo(() => [...new Set(gamesInArray)], [gamesInArray])

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
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

    const filteredItems = rows.filter(
        (item) =>
            (item.event &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                item.event.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.venue &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                item.venue.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.day &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                item.day.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.time &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                item.time.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.game &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                item.game.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.city &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                (filterGame !== 'all'
                    ? item.game.toLowerCase().includes(filterGame.toLowerCase())
                    : item.game.toLowerCase()) &&
                item.city.toLowerCase().includes(filterText.toLowerCase())),
    )

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            setResetPaginationToggle(!resetPaginationToggle)
            setFilterBuyIn(maxBuyIn)
            setFilterGame('all')
            setFilterText('')
            setFilterCity('all')
            setFilter('')
            setCity('all')
            setGame('all')
            setBuyIn(maxBuyIn)
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
                        onCityChange={handleCityChange}
                        minBuyIn={minBuyIn}
                        maxBuyIn={maxBuyIn}
                        cities={cities}
                        games={games}
                        filterGame={filterGame}
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
        filterBuyIn,
        filterGame,
        cities,
        games,
        setCity,
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
