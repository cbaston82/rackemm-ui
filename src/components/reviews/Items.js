import moment from 'moment'
import StarRatings from 'react-star-ratings'
import Button from '../Button'

function Items({ currentItems, handleDeleteReview, handleShowEditReviewModal, userInfo }) {
    return (
        <ul>
            {currentItems && currentItems.length > 0 ? (
                currentItems.map((review) => (
                    <li key={review._id}>
                        <div className="d-flex">
                            <div className="left">
                                <span>
                                    <img
                                        src={
                                            review.user.photo !== ''
                                                ? review.user.photo
                                                : 'https://res.cloudinary.com/imagine-design-develop/image/upload/v1665081924/rackemm_images/app_images/profile-placeholder.png'
                                        }
                                        className="profile-pict-img img-fluid"
                                        alt=""
                                    />
                                </span>
                            </div>
                            <div className="right">
                                <h4>
                                    {review.user.fullName}
                                    <span className="gig-rating text-body-2">
                                        <StarRatings
                                            rating={review.rating}
                                            starRatedColor="gold"
                                            starDimension="15px"
                                            numberOfStars={5}
                                            starSpacing="1px"
                                            name="rating"
                                        />
                                    </span>
                                </h4>
                                <div className="review-description">
                                    <p>{review.review}</p>
                                    {review.user._id === userInfo.me._id && (
                                        <>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-sm"
                                                onClick={() => handleShowEditReviewModal(review)}
                                            >
                                                Edit
                                            </button>
                                            <Button
                                                type="button"
                                                onClick={() => handleDeleteReview(review._id)}
                                                className="btn btn-link btn-sm"
                                            >
                                                Delete
                                            </Button>
                                        </>
                                    )}
                                </div>
                                <span className="publish py-3 d-inline-block w-100">
                                    {moment(review.created_at).fromNow()}
                                </span>
                            </div>
                        </div>
                    </li>
                ))
            ) : (
                <p>No reviews yet. Be the first to review this event.</p>
            )}
        </ul>
    )
}

export default Items
