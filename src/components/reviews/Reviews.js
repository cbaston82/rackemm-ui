import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import ReviewModal from '../ReviewModal'
import ReviewEditModal from '../ReviewEditModal'
import { getUserId } from '../../helpers/config'
import userAuthenticatedHooks from '../../hoook/userAuthenticatedHooks'
import ReviewsTitle from './ReviewsTitle'
import Items from './Items'

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
    const { handleNotAuthenticatedToast } = userAuthenticatedHooks()

    const userCreatedReview =
        event.reviews && event.reviews.filter((review) => review.user._id === getUserId(auth)).pop()

    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(event.reviews.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(event.reviews.length / itemsPerPage))
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % event.reviews.length
        setItemOffset(newOffset)
    }

    return (
        <div className="card rounded-0 p-3 mt-3" id="reviews-section">
            <div className="card-body">
                <ReviewsTitle
                    auth={auth}
                    handleShowEditReviewModal={handleShowEditReviewModal}
                    userCreatedReview={userCreatedReview}
                    handleNotAuthenticatedToast={handleNotAuthenticatedToast}
                    handleShowReviewModal={handleShowReviewModal}
                />
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
