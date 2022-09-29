import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Rate({
    count = 5,
    rating = 8,
    color = { filled: '#f5eb3b', unfilled: '#DCDCDC' },
    onRating,
}) {
    const [hoverRating, setHoverRating] = useState(0)
    const getColor = (index) => {
        if (hoverRating >= index) {
            return color.filled
        }
        if (!hoverRating && rating >= index) {
            return color.filled
        }

        return color.unfilled
    }

    const starRating = useMemo(
        () =>
            Array(count)
                .fill(0)
                .map((_, i) => i + 1)
                .map((idx) => (
                    <FontAwesomeIcon
                        key={idx}
                        className="cursor-pointer"
                        icon="star"
                        onClick={() => onRating(idx)}
                        style={{ color: getColor(idx) }}
                        onMouseEnter={() => setHoverRating(idx)}
                        onMouseLeave={() => setHoverRating(0)}
                    />
                )),
        [count, onRating, rating, hoverRating, getColor],
    )

    return <div>{starRating}</div>
}

export default Rate
