import DataTable from 'react-data-table-component'
import { FaTrophy } from 'react-icons/fa'

function WeeklyEventsResultsTable() {
    const weeklyResults = [
        {
            date: '2022-09-08',
            url: 'https://challonge.com/xj2sgfzk?fbclid=IwAR2nnKFaxdEFGJW-nbU_1xogcyvdhXrHiStRCktjKs3vpG55LgxZ7zI9Y9k',
        },
        {
            date: '2022-09-10',
            url: 'https://challonge.com/xj2sgfzk?fbclid=IwAR2nnKFaxdEFGJW-nbU_1xogcyvdhXrHiStRCktjKs3vpG55LgxZ7zI9Y9k',
        },
    ]

    const paginationComponentOptions = {
        rowsPerPageText: 'Events per page',
        rangeSeparatorText: 'of',
    }

    const columns = [
        {
            name: 'date',
            selector: (row) => row.date,
            sortable: true,
        },
        {
            name: 'url',
            cell: (row) => (
                <a
                    href={row.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link-light text-decoration-none text-truncate"
                >
                    {row.url}
                </a>
            ),
        },
    ]

    return (
        <>
            <div className="row d-flex flex-row-reverse mt-5">
                <h4 className="fw-bolder mt-4 mt-sm-0 border-bottom">
                    Weekly Results <FaTrophy color="gold" />
                </h4>
            </div>
            <div className="row">
                <DataTable
                    className="mt-3"
                    theme="rackemm_theme_admin"
                    columns={columns}
                    data={weeklyResults}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                />
            </div>
        </>
    )
}

export default WeeklyEventsResultsTable
