import { useEffect } from 'react'
import { connect } from 'react-redux'
import BreadCrumbs from '../../BreadCrumbs'
import CustomLoader from '../../CustomeLoader'
import { getSavedFilters, deleteFilter } from '../../../redux'
import FiltersTable from './FiltersTable'
import useDeleteSwalModal from '../../../hoook/useDeleteSwalModal'

function FiltersPage({ savedFilters, getSavedFilters, deleteFilter }) {
    useEffect(() => {
        getSavedFilters()
    }, [getSavedFilters])

    const [handleDelete] = useDeleteSwalModal(deleteFilter)

    return (
        <div className="container">
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
