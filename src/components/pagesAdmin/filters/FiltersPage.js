import { useEffect } from 'react'
import { connect } from 'react-redux'
import { FaBars } from 'react-icons/fa'
import BreadCrumbs from '../../BreadCrumbs'
import CustomLoader from '../../CustomeLoader'
import { getSavedFilters, deleteFilter } from '../../../redux'
import FiltersTable from './FiltersTable'
import useSwalModalsHooks from '../../../hoook/useSwalModalsHooks'

function FiltersPage({ savedFilters, getSavedFilters, deleteFilter }) {
    useEffect(() => {
        getSavedFilters()
    }, [getSavedFilters])

    const { handleDelete } = useSwalModalsHooks(deleteFilter)

    return (
        <div className="container">
            <a
                className="btn btn-secondary mb-5"
                data-bs-toggle="offcanvas"
                href="#offCanvasNavigation"
                role="button"
                aria-controls="offCanvasNavigation"
            >
                Menu <FaBars />
            </a>

            <BreadCrumbs navigateToPreviousLink={false} activeBreadcrumbTitle="Saved Filters" />
            {savedFilters.loading ? (
                <CustomLoader color="white" loaderMessage="fetching events" />
            ) : (
                <FiltersTable handleDeleteFilter={handleDelete} filters={savedFilters.filters} />
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    savedFilters: state.savedFilters,
})

const mapDispatchToProps = (dispatch) => ({
    getSavedFilters: () => dispatch(getSavedFilters()),
    deleteFilter: (_id) => dispatch(deleteFilter(_id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPage)
