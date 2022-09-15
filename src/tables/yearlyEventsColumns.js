const Button = () => (
    <button className="btn btn-primary btn-sm" type="button">
        <a className="text-white-50" href="/">
            Download
        </a>
    </button>
)
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
                className="btn btn-outline-warning btn-sm"
                href={`/yearly-event/${row._id}`}
                rel="noopener noreferrer"
            >
                View
            </a>
        ),
    },
]
