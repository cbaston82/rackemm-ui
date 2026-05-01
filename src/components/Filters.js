import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { FaSave, FaFilter, FaRegSave } from 'react-icons/fa'
import CustomLoader from './CustomeLoader'
import { getSavedFilters, saveFilter, setFilter } from '../redux'
import useSubscriptionHooks from '../hoook/useSubscriptionHooks'

function Filters({
    getSavedFilters,
    saveFilter,
    savedFilters,
    filterType,
    buttonTitle,
    setFilter,
    auth,
    stripeCustomer,
}) {
    const { handleNoSubscriptionToast } = useSubscriptionHooks()
    const [filterDescription, setFilterDescription] = useState('')
    const url = window.location.pathname + window.location.search

    const handleSaveFilter = () => {
        saveFilter({
            url,
            type: filterType,
            description: filterDescription,
        })
    }

    const handleSetFilter = (e, filterId, filterUrl) => {
        e.preventDefault()
        setFilter(filterId)
        window.location.href = filterUrl
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

    const filtersForType = savedFilters.filters.filter((f) => f.type === filterType)

    return (
        <>
            <div className="dropdown">
                <button
                    className="btn btn-outline-secondary dropdown-toggle btn-sm"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <FaFilter /> {buttonTitle}
                    {filtersForType.length > 0 && (
                        <span
                            className="badge bg-warning text-dark ms-1"
                            style={{ fontSize: '0.65rem' }}
                        >
                            {filtersForType.length}
                        </span>
                    )}
                </button>
                <ul className="dropdown-menu rackemm-dropdown-menu-dark">
                    {filtersForType.length === 0 && (
                        <li>
                            <span
                                className="dropdown-item text-white-50 fst-italic"
                                style={{ fontSize: '0.85rem' }}
                            >
                                No saved filters yet
                            </span>
                        </li>
                    )}
                    {filtersForType.map((filter) => (
                        <div key={filter._id}>
                            <li>
                                <button
                                    type="button"
                                    className={`dropdown-item ${
                                        savedFilters.loadedFilter === filter._id ? 'active' : ''
                                    }`}
                                    onClick={(e) => handleSetFilter(e, filter._id, filter.url)}
                                >
                                    {filter.description}
                                </button>
                            </li>
                            <hr className="dropdown-divider border-secondary m-0" />
                        </div>
                    ))}
                    <li>
                        {auth.token ? (
                            <button
                                type="button"
                                className="dropdown-item text-warning"
                                data-bs-toggle="modal"
                                data-bs-target="#saveFilterModal"
                            >
                                <FaSave /> Save current filter
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => handleNoSubscriptionToast(stripeCustomer)}
                                className="dropdown-item text-warning"
                            >
                                <FaSave /> Save current filter
                            </button>
                        )}
                    </li>
                </ul>
            </div>

            <div
                className="modal fade"
                id="saveFilterModal"
                tabIndex="-1"
                aria-labelledby="saveFilterModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content bg-dark border-secondary rounded-0">
                        <div className="modal-header border-secondary">
                            <h5 className="modal-title text-white" id="saveFilterModalLabel">
                                <FaFilter className="rackemm-text-cyan me-2" />
                                Save filter
                            </h5>
                            <button
                                id="btn-close"
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            {!savedFilters.filterCreated ? (
                                <>
                                    {savedFilters.loading ? (
                                        <CustomLoader loaderMessage="Saving filter" color="white" />
                                    ) : (
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <p
                                                        className="text-center fst-italic mb-3"
                                                        style={{
                                                            fontSize: '0.8rem',
                                                            color: 'var(--cyan)',
                                                            wordBreak: 'break-all',
                                                        }}
                                                    >
                                                        {url}
                                                    </p>
                                                    <div className="form-group">
                                                        <input
                                                            placeholder='Give this filter a name, e.g. "9-Ball Fridays in Houston"'
                                                            name="description"
                                                            type="text"
                                                            onChange={(e) =>
                                                                setFilterDescription(e.target.value)
                                                            }
                                                            className="form-control bg-dark text-white border-secondary form-control-sm"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </>
                            ) : null}
                        </div>
                        <div className="modal-footer border-secondary">
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-sm"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                disabled={!filterDescription.length}
                                type="button"
                                onClick={handleSaveFilter}
                                className="btn btn-outline-warning btn-sm"
                            >
                                <FaRegSave /> Save Filter
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
    auth: state.auth,
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    getSavedFilters: () => dispatch(getSavedFilters()),
    saveFilter: (filter) => dispatch(saveFilter(filter)),
    setFilter: (filterId) => dispatch(setFilter(filterId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
