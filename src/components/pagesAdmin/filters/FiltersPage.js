import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import BreadCrumbs from '../../BreadCrumbs'
import CustomLoader from '../../CustomeLoader'
import { getSavedFilters, deleteFilter } from '../../../redux'
import FiltersTable from './FiltersTable'
import useSwalModalsHooks from '../../../hoook/useSwalModalsHooks'
import SideMenu from '../../structure/SideMenu'
import { userHasSubscription } from '../../../helpers/config'
import usePageTitle from '../../../hoook/usePageTitle'

function FiltersPage({ savedFilters, getSavedFilters, deleteFilter, stripeCustomer }) {
    usePageTitle('- Filters')
    useEffect(() => {
        getSavedFilters()
    }, [getSavedFilters])

    const { handleDelete } = useSwalModalsHooks(deleteFilter)

    const location = useLocation()

    return (
        <div className="container">
            <SideMenu
                className="mt-5"
                userIsSubscribed={userHasSubscription(stripeCustomer)}
                location={location.pathname}
            />

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
    stripeCustomer: state.stripeCustomer,
    savedFilters: state.savedFilters,
})

const mapDispatchToProps = (dispatch) => ({
    getSavedFilters: () => dispatch(getSavedFilters()),
    deleteFilter: (_id) => dispatch(deleteFilter(_id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPage)
