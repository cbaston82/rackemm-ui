import BreadCrumbs from './BreadCrumbs'
import Filters from './Filters'

function BreadCrumbsWilFilters({ filterValues }) {
    return (
        <div className="d-flex justify-content-between">
            <BreadCrumbs activeBreadcrumbTitle="Weekly Events" />
            <Filters filterValues={filterValues} filterType="weekly" buttonTitle="Weekly Filters" />
        </div>
    )
}

export default BreadCrumbsWilFilters
