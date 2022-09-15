import DataTable, { createTheme } from 'react-data-table-component'
import CustomLoader from './CustomeLoader'

import { useEffect, useMemo, useState } from 'react'
import FilterComponent from './Filter'
import { solarized } from './SolarizedTheme'
createTheme('solarizedTheme', solarized, 'dark')

function EventsTable({
    loaderMessage,
    tournamentColumns,
    events,
    filterValues,
    setBuyIn,
    setCity,
    setFilter,
}) {
    tournamentColumns[0].defaultExpanded = true

    const tournamentBuyInsArray = events.map((item) => item.buyIn)
    const minBuyIn = Math.min(...tournamentBuyInsArray).toString()
    const maxBuyIn = Math.max(...tournamentBuyInsArray).toString()

    const tournamentCitiesInArray = events.map((item) => item.city)

    const cities = useMemo(() => {
        return [...new Set(tournamentCitiesInArray)]
    }, [tournamentCitiesInArray]);
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
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

    // TODO: Clean this mess up. Big Code Smell
    const filteredItems = rows.filter(
        (item) =>
            (item.event &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                item.event.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.venue &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                item.venue.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.day &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                item.day.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.time &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                item.time.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.game &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                item.game.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.city &&
                parseInt(item.buyIn, 10) <= parseInt(filterBuyIn, 10) &&
                (filterCity !== 'all'
                    ? item.city.toLowerCase().includes(filterCity.toLowerCase())
                    : item.city.toLowerCase()) &&
                item.city.toLowerCase().includes(filterText.toLowerCase())),
    )

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            setResetPaginationToggle(!resetPaginationToggle)
            setFilterText('')
            setFilter('')
            setFilterBuyIn(maxBuyIn)
            setBuyIn(maxBuyIn)
            setFilterCity('all')
            setCity('all')
        }

        const handlePriceChange = (e) => {
            if (filterBuyIn) {
                let buyIn = e.target.value
                setBuyIn(buyIn)
                setFilterBuyIn(buyIn)
            }
        }

        const handleCityChange = (e) => {
            if (filterCity) {
                let city = e.target.value
                setFilterCity(city)
                setCity(city)
            }
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
                        minBuyIn={minBuyIn}
                        maxBuyIn={maxBuyIn}
                        cities={cities}
                        onClear={handleClear}
                        onPriceChange={handlePriceChange}
                        onCityChange={handleCityChange}
                        filterBuyIn={filterBuyIn}
                        filterText={filterText}
                        filterCity={filterCity}
                    />
                ) : null}
            </>
        )
    }, [filterText, filterCity, cities, maxBuyIn, minBuyIn,setBuyIn, setCity,setFilter, pending, filterBuyIn, resetPaginationToggle])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(events)
            setPending(false)
        }, 100)
        return () => clearTimeout(timeout)
    }, [events])

    return (
        <DataTable
            theme="solarizedTheme"
            columns={tournamentColumns}
            data={filteredItems}
            progressPending={pending}
            progressComponent={pending && <CustomLoader loaderMessage={loaderMessage} />}
            // expandableRows
            paginationResetDefaultPage={resetPaginationToggle}
            subHeaderComponent={subHeaderComponentMemo}
            subHeader
            // expandableRowExpanded={(row) => row.defaultExpanded}
            // expandableRowsComponent={Expanded}
            pagination
        />
    )
}

export default EventsTable
