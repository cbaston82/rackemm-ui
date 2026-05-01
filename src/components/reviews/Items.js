import moment from 'moment'
import StarRatings from 'react-star-ratings'
import Button from '../Button'

function Items({ currentItems, handleDeleteReview, handleShowEditReviewModal, userInfo }) {
    if (!currentItems || currentItems.length === 0) {
        return (
            <p className="text-white-50 fst-italic py-4 text-center">
                No reviews yet. Be the first to review this event.
            </p>
        )
    }

    return (
        <ul className="list-unstyled">
            {currentItems.map((review) => (
                <li key={review._id} className="border-bottom border-secondary py-4">
                    <div className="d-flex gap-3">
                        <img
                            src={
                                review.user.photo !== ''
                                    ? review.user.photo
                                    : 'https://res.cloudinary.com/imagine-design-develop/image/upload/v1665081924/rackemm_images/app_images/profile-placeholder.png'
                            }
                            className="rounded-circle"
                            alt={review.user.fullName}
                            width="48"
                            height="48"
                            style={{ objectFit: 'cover', flexShrink: 0 }}
                        />
                        <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                                <div>
                                    <span className="text-white fw-semibold">
                                        {review.user.fullName}
                                    </span>
                                    <span className="ms-3">
                                        <StarRatings
                                            rating={review.rating}
                                            starRatedColor="gold"
                                            starDimension="14px"
                                            numberOfStars={5}
                                            starSpacing="1px"
                                            name="rating"
                                        />
                                    </span>
                                </div>
                                <span className="text-white-50" style={{ fontSize: '0.8rem' }}>
                                    {moment(review.created_at).fromNow()}
                                </span>
                            </div>
                            {review.review && (
                                <p
                                    className="text-white-50 mt-2 mb-2"
                                    style={{ fontSize: '0.9rem' }}
                                >
                                    {review.review}
                                </p>
                            )}
                            {review.user._id === userInfo.me._id && (
                                <div className="d-flex gap-2 mt-1">
                                    <button
                                        type="button"
                                        className="btn btn-link btn-sm text-warning p-0 text-decoration-none"
                                        onClick={() => handleShowEditReviewModal(review)}
                                    >
                                        Edit
                                    </button>
                                    <Button
                                        type="button"
                                        onClick={() => handleDeleteReview(review._id)}
                                        className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Items
