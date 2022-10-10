import StarRatings from 'react-star-ratings'
import moment from 'moment'
import Button from './Button'

function Reviews({ event, auth, handleDeleteReview }) {
    return (
        <div className="card rounded-0 p-3 mt-3" id="reviews-section">
            <div className="card-body">
                <div className="row d-flex flex-row-reverse">
                    <div className="col">
                        <h5 className="fw-bolder mt-4 mt-sm-0 border-bottom">Reviews</h5>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="review-list">
                        <ul>
                            {event.reviews && event.reviews.length > 0 ? (
                                event.reviews.map((review) => (
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
                                                    {review.user._id === auth.user.id && (
                                                        <>
                                                            <button
                                                                type="button"
                                                                className="btn btn-link btn-sm"
                                                            >
                                                                Edit
                                                            </button>
                                                            <Button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleDeleteReview(review._id)
                                                                }
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
