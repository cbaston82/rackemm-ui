import { FaExternalLinkAlt } from 'react-icons/fa'

export const tournamentColumns = [
    {
        name: 'Date',
        selector: (row) => new Date(row.startDate).toDateString(),
        sortable: true,
    },
    {
        name: 'Venue',
        selector: (row) => row.venue,
        sortable: true,
        hide: 'md',
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
        hide: 'md',
    },
    {
        name: '',
        button: true,
        cell: (row) => (
            <a
                className="btn btn-outline-light btn-sm"
                href={`/yearly-event/${row._id}`}
                rel="noopener noreferrer"
            >
                <FaExternalLinkAlt />
            </a>
        ),
    },
]
