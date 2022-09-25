import { FaExternalLinkAlt } from 'react-icons/fa'

export const tournamentColumns = [
    {
        name: 'Start Time',
        selector: (row) =>
            new Date(row.startTime).toLocaleString([], {
                month: '2-digit',
                day: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            }),
        sortable: true,
    },
    {
        name: 'Venue',
        selector: (row) => row.venue,
        sortable: true,
    },
    {
        name: 'Game',
        selector: (row) => row.game,
        sortable: true,
    },
    {
        name: 'City',
        selector: (row) => row.city,
        sortable: true,
    },
    {
        name: '',
        button: true,
        cell: (row) => (
            <a
                className="btn btn-light btn-sm"
                href={`/yearly-event/${row._id}`}
                rel="noopener noreferrer"
            >
                <FaExternalLinkAlt />
            </a>
        ),
    },
]
