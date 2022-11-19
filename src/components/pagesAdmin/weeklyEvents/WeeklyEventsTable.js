import { Link } from 'react-router-dom'
import { FaEdit, FaExternalLinkAlt, FaTrashAlt } from 'react-icons/fa'
import DataTable from 'react-data-table-component'
import LinesEllipsis from 'react-lines-ellipsis'
import EventsCreated from '../../EventsCreated'
import '../../SolarizedTheme'
import { formatTimeForWeeklyEvent } from '../../../helpers'

const weeklyColumns = (handleDeleteEvent) => [
    {
        name: 'Day',
        selector: (row) => row.day,
        sortable: true,
        cell: (row) => (
            <>
                {row.day} {formatTimeForWeeklyEvent(row.startTime)}
            </>
        ),
    },
    {
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
        maxWidth: '600px', // when using custom you should use width or maxWidth, otherwise, the table will default to flex grow behavior
        cell: (row) => (
            <LinesEllipsis
                text={row.title}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
            />
        ),
    },
    // {
    //     name: 'Buy-In',
    //     selector: (row) =>
    //         currencyFormatter.format(row.buyIn, {
    //             code: 'USD',
    //         }),
    //     sortable: true,
    // },
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
        // eslint-disable-next-line react/no-unstable-nested-components
        cell: (row) => (
            <>
                <Link className="ms-3" to={`/event/${row._id}`}>
                    <button type="button" className="btn btn-light btn-sm">
                        <FaExternalLinkAlt />
                    </button>
                </Link>
                <Link className="ms-3" to={`/account/weekly-events/edit/${row._id}`}>
                    <button type="button" className="btn btn-info btn-sm">
                        <FaEdit />
                    </button>
                </Link>
                <button
                    type="button"
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

function WeeklyEventsTable({ events, handleDeleteEvent }) {
    const paginationComponentOptions = {
        rowsPerPageText: 'Events per page',
        rangeSeparatorText: 'of',
    }

    return (
        <>
            <DataTable
                className="mt-3"
                theme="rackemm_theme_admin"
                columns={weeklyColumns(handleDeleteEvent)}
                data={events}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />

            <EventsCreated events={events} />
        </>
    )
}
export default WeeklyEventsTable
