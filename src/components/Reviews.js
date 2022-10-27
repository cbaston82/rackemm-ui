import StarRatings from 'react-star-ratings'
import { useState, useEffect } from 'react'
import moment from 'moment'
import ReactPaginate from 'react-paginate'
import { FiMessageSquare } from 'react-icons/fi'
import Button from './Button'
import ReviewModal from './ReviewModal'
import ReviewEditModal from './ReviewEditModal'
import { getUserId, userIsLoggedIn } from '../helpers/config'

function Items({ currentItems, handleDeleteReview, handleShowEditReviewModal, auth }) {
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
                                    {review.user._id === auth.user.id && (
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

function Reviews({
    handleSaveReview,
    handleEditReview,
    event,
    auth,
    handleDeleteReview,
    givenReview,
}) {
    const [show, setShow] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [reviewToEdit, setReviewToEdit] = useState({})

    const itemsPerPage = 10

    const handleCloseReviewModal = () => setShow(false)
    const handleShowReviewModal = () => setShow(true)
    const handleCloseEditReviewModal = () => setShowEditModal(false)
    const handleShowEditReviewModal = (review) => {
        setReviewToEdit(review)
        setShowEditModal(true)
    }

    const userCreatedReview = event.reviews
        .filter((review) => review.user._id === getUserId(auth))
        .pop()

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage
        console.log(`Loading items from ${itemOffset} to ${endOffset}`)
        setCurrentItems(event.reviews.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(event.reviews.length / itemsPerPage))
    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % event.reviews.length
        console.log(`User requested page number ${e.selected}, which is offset ${newOffset}`)
        setItemOffset(newOffset)
    }

    return (
        <div className="card rounded-0 p-3 mt-3" id="reviews-section">
            <div className="card-body">
                <div className="row d-flex flex-row-reverse">
                    <div className="col d-flex justify-content-between border-bottom">
                        <h5 className="fw-bolder mt-4 mt-sm-0">Reviews</h5>

                        {userIsLoggedIn(auth) && (
                            <>
                                {!userCreatedReview ? (
                                    <Button
                                        onClick={handleShowReviewModal}
                                        className="btn btn-success btn-sm mb-2"
                                        buttonText="Write a review"
                                    >
                                        <FiMessageSquare />
                                    </Button>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-success btn-sm mb-2"
                                        onClick={() => handleShowEditReviewModal(userCreatedReview)}
                                    >
                                        Edit review
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="review-list">
                        <Items
                            currentItems={currentItems}
                            handleDeleteReview={handleDeleteReview}
                            handleShowEditReviewModal={handleShowEditReviewModal}
                            auth={auth}
                        />
                        <div className="reviews-pagination">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </div>
                </div>
                <ReviewModal
                    handleCloseReviewModal={handleCloseReviewModal}
                    handleSaveReview={handleSaveReview}
                    givenReview={givenReview}
                    show={show}
                    auth={auth}
                    event={event}
                />

                <ReviewEditModal
                    handleCloseEditReviewModal={handleCloseEditReviewModal}
                    handleEditReview={handleEditReview}
                    givenReview={givenReview}
                    showEditModal={showEditModal}
                    reviewToEdit={reviewToEdit}
                    auth={auth}
                    event={event}
                />
            </div>
        </div>
    )
}

export default Reviews
