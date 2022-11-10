import { FaArrowCircleRight } from 'react-icons/fa'
import LinesEllipsis from 'react-lines-ellipsis'
import currencyFormatter from 'currency-formatter'
import StarRatings from 'react-star-ratings'
import Button from '../../Button'

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
