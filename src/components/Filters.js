import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FaSave, FaFilter } from 'react-icons/fa'
import CurrencyFormat from 'react-currency-format'
import CustomLoader from './pagesPublic/tables/CustomeLoader'
import { getSavedFilters, saveFilter, setFilter } from '../redux'

function Filters({
    getSavedFilters,
    saveFilter,
    savedFilters,
    filterType,
    buttonTitle,
    filterValues,
    setFilter,
}) {
    const [filterDescription, setFilterDescription] = useState('')
    const url = window.location.pathname + window.location.search

    const handleSaveFilter = () => {
        saveFilter({
            url,
            type: filterType,
            description: filterDescription,
        })
    }

    const handleSetFilter = (e, filterId, url) => {
        e.preventDefault()
        setFilter(filterId)
        window.location.href = url
    }

    useEffect(() => {
        if (savedFilters.filterCreated) {
            const button = document.getElementById('btn-close')
            button.click()
        }
    }, [savedFilters, getSavedFilters])

    useEffect(() => {
        getSavedFilters()
    }, [getSavedFilters])

    return (
        <>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle btn-sm"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <FaFilter /> {buttonTitle}
                </button>
                <ul className="dropdown-menu rackemm-dropdown-menu">
                    {savedFilters.filters.map(
                        (filter) =>
                            filter.type === filterType && (
                                <>
                                    <li key={filter._id}>
                                        <button
                                            className={`dropdown-item ${
                                                savedFilters.loadedFilter === filter._id
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            onClick={(e) =>
                                                handleSetFilter(e, filter._id, filter.url)
                                            }
                                        >
                                            {filter.description}
                                        </button>
                                    </li>
                                    <hr />
                                </>
                            ),
                    )}
                    <li>
                        <button
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            <FaSave /> Save current filter
                        </button>
                    </li>
                </ul>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <FaFilter /> Save filter
                            </h5>
                            <button
                                id="btn-close"
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {!savedFilters.filterCreated ? (
                                <>
                                    {savedFilters.loading ? (
                                        <CustomLoader loaderMessage="Saving filter" color="black" />
                                    ) : (
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <p className="text-center fst-italic fw-ligh text-success">
                                                        {url}
                                                    </p>
                                                    <div className="d-flex justify-content-around">
                                                        <p>
                                                            <span className="fw-bolder text-black">
                                                                Buy-in:
                                                            </span>{' '}
                                                            <span className="fw-light">
                                                                <CurrencyFormat
                                                                    value={filterValues.buyIn}
                                                                    displayType={'text'}
                                                                    thousandSeparator={true}
                                                                    prefix={'$'}
                                                                />
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span className="fw-bolder text-black">
                                                                City:
                                                            </span>{' '}
                                                            <span className="fw-light">
                                                                {filterValues.city}
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span className="fw-bolder text-black">
                                                                Search:
                                                            </span>{' '}
                                                            <span className="fw-light">
                                                                {filterValues.filter}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder="Filter description. e.g 8-Ball Thursdays at Putters"
                                                            name="description"
                                                            type="text"
                                                            onChange={(e) =>
                                                                setFilterDescription(e.target.value)
                                                            }
                                                            className="form-control form-control-sm"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </>
                            ) : null}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                disabled={!filterDescription.length}
                                type="button"
                                onClick={handleSaveFilter}
                                className="btn btn-outline-primary"
                            >
                                Save Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    savedFilters: state.savedFilters,
})

const mapDispatchToProps = (dispatch) => ({
    getSavedFilters: () => dispatch(getSavedFilters()),
    saveFilter: (filter) => dispatch(saveFilter(filter)),
    setFilter: (filterId) => dispatch(setFilter(filterId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
