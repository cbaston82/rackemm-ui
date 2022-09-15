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
        hide: 'md',
    },
    {
        name: 'Time',
        selector: (row) => row.startTime,
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
                className="btn btn-outline-warning btn-sm"
                href={`/weekly-event/${row._id}`}
                rel="noopener noreferrer"
            >
                View
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
