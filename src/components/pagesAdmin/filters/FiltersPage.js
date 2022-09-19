import { useEffect } from 'react'
import { connect } from 'react-redux'
import BreadCrumbs from '../../BreadCrumbs'
import CustomLoader from '../../pagesPublic/tables/CustomeLoader'
import { getSavedFilters, deleteFilter } from '../../../redux'
import FiltersTable from './FiltersTable'
import MySwal from 'sweetalert2'

function FiltersPage({ savedFilters, getSavedFilters, deleteFilter }) {
    useEffect(() => {
        getSavedFilters()
    }, [getSavedFilters])

    const handleDeleteFilter = (id) => {
        MySwal.fire({
            showCancelButton: true,
            title: 'Are you sure?',
            text: 'You want to delete this event?',
            confirmButtonColor: 'red',
            confirmButtonText: 'Yes, delete this filter!',
            icon: 'question',
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete.isConfirmed) {
                deleteFilter(id)

                MySwal.fire({
                    confirmButtonColor: '#00cdcd',
                    title: 'Your filer has been deleted',
                    icon: 'success',
                })
            }
        })
    }

    return (
        <div className="container">
            <BreadCrumbs navigateToPreviousLink={false} activeBreadcrumbTitle="Saved Filters" />
            {savedFilters.loading ? (
                <div className="d-flex justify-content-center align-content-center">
                    <CustomLoader color="black" loaderMessage="fetching events" />
                </div>
            ) : (
                <FiltersTable
                    handleDeleteFilter={handleDeleteFilter}
                    filters={savedFilters.filters}
                />
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
