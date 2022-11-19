import { FaArrowCircleRight } from 'react-icons/fa'
import StarRatings from 'react-star-ratings'
import LinesEllipsis from 'react-lines-ellipsis'
import currencyFormatter from 'currency-formatter'
import { formatTimeForWeeklyEvent } from '../../../helpers'
import Button from '../../Button'

export const tournamentColumns = [
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
    {
        name: 'Buy-In',
        selector: (row) =>
            currencyFormatter.format(row.buyIn, {
                code: 'USD',
            }),
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
                starDimension="12px"
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
                path={`/event/${row._id}`}
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
