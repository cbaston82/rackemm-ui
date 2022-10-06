import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaTrashAlt } from 'react-icons/fa'
import DataTable from 'react-data-table-component'
import '../../SolarizedTheme'

function FiltersTable({ filters, handleDeleteFilter }) {
    const paginationComponentOptions = {
        rowsPerPageText: 'Filters per page',
        rangeSeparatorText: 'of',
    }
    const columns = [
        {
            name: 'description',
            selector: (row) => row.description,
            sortable: true,
        },
        {
            name: 'URL',
            selector: (row) => row.url,
            sortable: true,
        },
        {
            name: '',
            button: true,
            // eslint-disable-next-line react/no-unstable-nested-components
            cell: (row) => (
                <>
                    <Link className="ms-3" to={row.url}>
                        <button type="button" className="btn btn-light btn-sm">
                            <FaExternalLinkAlt />
                        </button>
                    </Link>
                    <button
                        type="button"
                        data-id={row._id}
                        onClick={() => handleDeleteFilter(row._id)}
                        className="btn btn-danger btn-sm ms-3"
                    >
                        <FaTrashAlt />
                    </button>
                </>
            ),
        },
    ]
    return (
        <>
            <DataTable
                className="mt-3"
                theme="rackemm_theme_admin"
                columns={columns}
                data={filters}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
        </>
    )
}
export default FiltersTable
