import DataTable from 'react-data-table-component'
import { FaTrophy } from 'react-icons/fa'
import { format } from 'date-fns'

function WeeklyEventsResultsTable({ brackets }) {
    const paginationComponentOptions = {
        rowsPerPageText: 'Events per page',
        rangeSeparatorText: 'of',
    }

    const columns = [
        {
            name: 'title',
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: 'date',
            selector: (row) => format(new Date(row.date * 1000), 'MM-dd-yyyy'),
            sortable: true,
        },

        {
            name: 'url',
            // eslint-disable-next-line react/no-unstable-nested-components
            cell: (row) => (
                <a
                    href={row.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-info text-decoration-none text-truncate"
                >
                    View Bracket
                </a>
            ),
        },
    ]

    return (
        <>
            <div className="card rounded-0 p-3 mt-3" id="reviews-section">
                <div className="card-body">
                    <div className="row d-flex flex-row-reverse">
                        <div className="col">
                            <h5 className="fw-bolder mt-4 mt-sm-0 border-bottom">
                                Event Results <FaTrophy color="gold" />{' '}
                            </h5>
                        </div>
                    </div>
                    <div className="row">
                        <DataTable
                            className="mt-3"
                            theme="rackemm_theme_admin"
                            columns={columns}
                            data={brackets}
                            pagination
                            paginationComponentOptions={paginationComponentOptions}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeeklyEventsResultsTable
