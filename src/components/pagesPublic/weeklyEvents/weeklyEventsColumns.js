import { FaArrowCircleRight } from 'react-icons/fa'
import StarRatings from 'react-star-ratings'
import { formatTimeForWeeklyEvent } from '../../../helpers'
import Button from '../../Button'

export const tournamentColumns = [
    {
        name: 'Day',
        selector: (row) => row.day,
        sortable: true,
    },
    // {
    //     name: 'Venue',
    //     selector: (row) => row.venue,
    //     sortable: true,
    // },
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
        sortable: false,
    },
    {
        name: '',
        button: true,
        cell: (row) => (
            <Button
                className="btn btn-outline-warning btn-sm"
                path={`/weekly-event/${row._id}`}
                buttonText="View"
            >
                <FaArrowCircleRight />
            </Button>
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
