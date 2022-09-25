import { FaExternalLinkAlt } from 'react-icons/fa'
import { formatTimeForWeeklyEvent } from '../../../helpers'

export const tournamentColumns = [
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
        selector: (row) => formatTimeForWeeklyEvent(row.startTime),
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
                href={`/weekly-event/${row._id}`}
                rel="noopener noreferrer"
            >
                <FaExternalLinkAlt />
            </a>
        ),
    },
    // {
    //     name: 'Buy In',
    //     selector: (row) => row.buyIn,
    //     sortable: true,
    //     hide: 'md',
    // },
    // {
    //     name: 'Event',
    //     selector: (row) => row.event,
    //     sortable: true,
    //     hide: 'md',
    // },
    // {
    //     name: 'Contact',
    //     selector: (row) => row.pointOfContact,
    //     sortable: true,
    //     hide: 'md',
    // },
    // {
    //     name: 'Rating System',
    //     selector: (row) => row.ratingSystem,
    //     sortable: true,
    //     hide: 'md',
    // },
]
