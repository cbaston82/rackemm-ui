import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'
import { FaEdit, FaExternalLinkAlt, FaTrashAlt } from 'react-icons/fa'
import EventsCreated from '../../EventsCreated'
import DataTable from 'react-data-table-component'
import '../../SolarizedTheme'

function WeeklyEventTable({ events, handleDeleteEvent }) {
    const paginationComponentOptions = {
        rowsPerPageText: 'Events per page',
        rangeSeparatorText: 'of',
    }
    const columns = [
        {
            name: 'Day',
            selector: (row) => row.day,
            sortable: true,
        },
        {
            name: 'Venue',
            selector: (row) => row.venue,
            sortable: true,
        },
        {
            name: 'Time',
            selector: (row) => row.startTime,
            sortable: true,
        },
        {
            name: 'Buy-In',
            selector: (row) =>
                currencyFormatter.format(row.buyIn, {
                    code: 'USD',
                }),
            sortable: true,
        },
        {
            name: 'Game',
            selector: (row) => row.game,
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) => row.status,
            sortable: true,
            conditionalCellStyles: [
                {
                    when: (row) => row.status === 'active',
                    style: {
                        backgroundColor: 'rgba(80, 124, 102, 0.9)',
                        color: 'white',
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    },
                },
                {
                    when: (row) => row.status === 'inactive',
                    style: {
                        backgroundColor: 'rgba(153, 95, 101, 1)',
                        color: 'white',
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    },
                },
            ],
        },
        {
            name: '',
            button: true,
            cell: (row) => (
                <>
                    <Link className="ms-3" to={`/weekly-event/${row._id}`}>
                        <button className="btn btn-light btn-sm">
                            <FaExternalLinkAlt />
                        </button>
                    </Link>
                    <Link className="ms-3" to={`/account/weekly-events/edit/${row._id}`}>
                        <button className="btn btn-info btn-sm">
                            <FaEdit />
                        </button>
                    </Link>
                    <button
                        data-id={row._id}
                        onClick={() => handleDeleteEvent(row._id)}
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
                data={events}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />

            <EventsCreated events={events} />
        </>
    )
}
export default WeeklyEventTable
