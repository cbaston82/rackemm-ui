import { FaArrowCircleRight } from 'react-icons/fa'
import StarRatings from 'react-star-ratings'
import Button from '../../Button'

export const tournamentColumns = [
    {
        name: 'Start Time',
        selector: (row) =>
            new Date(row.startTime * 1000).toLocaleString([], {
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
        name: 'Rating',
        selector: (row) => (
            <StarRatings
                rating={row.ratingsAverage}
                starRatedColor="gold"
                starDimension="15px"
                numberOfStars={5}
                starSpacing="1px"
                name="rating"
            />
        ),
        sortable: true,
    },
    {
        name: '',
        button: true,
        cell: (row) => (
            <Button
                className="btn btn-outline-warning btn-sm"
                path={`/event/${row._id}`}
                buttonText="View"
            >
                <FaArrowCircleRight />
            </Button>
        ),
    },
]
