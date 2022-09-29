function FilterComponent({
    minBuyIn,
    maxBuyIn,
    filterBuyIn,
    filterText,
    filterCity,
    filterGame,
    onCityChange,
    onGameChange,
    onFilter,
    onPriceChange,
    onClear,
    cities,
    games,
}) {
    return (
        <div className="col-12 mt-3">
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Max Buy In: ${filterBuyIn}
                        </span>
                        <input
                            className="form-range form-control form-control-sm"
                            type="range"
                            min={minBuyIn}
                            max={maxBuyIn}
                            value={filterBuyIn}
                            onChange={(e) => onPriceChange(e)}
                            id="customRange1"
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            City
                        </span>
                        <select
                            className="form-control form-control-sm"
                            aria-label="Search Input"
                            value={filterCity}
                            onChange={(e) => onCityChange(e)}
                        >
                            <option value="all">All Cities</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city.toString()}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Search
                        </span>
                        <input
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="Filter..."
                            aria-label="Search Input"
                            value={filterText}
                            onChange={(e) => onFilter(e)}
                        />
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Game
                        </span>
                        <select
                            className="form-control form-control-sm"
                            aria-label="Search Input"
                            value={filterGame}
                            onChange={(e) => onGameChange(e)}
                        >
                            <option value="all">All Games</option>
                            {games.map((game, index) => (
                                <option key={index} value={game.toString()}>
                                    {game}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="d-grid gap-2">
                        <button
                            className={`btn  btn-sm ${
                                filterCity !== 'all' ||
                                filterBuyIn !== maxBuyIn ||
                                filterText !== '' ||
                                filterGame !== 'all'
                                    ? 'btn-danger'
                                    : 'btn-outline-secondary'
                            }`}
                            type="button"
                            onClick={onClear}
                        >
                            Clear filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterComponent
