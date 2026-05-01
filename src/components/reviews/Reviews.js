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
    userInfo,
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

    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(event.reviews.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(event.reviews.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, event])

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % event.reviews.length
        setItemOffset(newOffset)
    }

    return (
        <div className="card rounded-0 p-3 mt-3 bg-dark border-secondary" id="reviews-section">
            <div className="card-body">
                {event.reviews && (
                    <ReviewsTitle
                        auth={auth}
                        handleShowEditReviewModal={handleShowEditReviewModal}
                        userCreatedReview={event.reviews
                            .filter((review) => review.user._id === getUserId(userInfo))
                            .pop()}
                        handleNotAuthenticatedToast={handleNotAuthenticatedToast}
                        handleShowReviewModal={handleShowReviewModal}
                    />
                )}
                <div className="row mt-2">
                    <div className="col-12">
                        <Items
                            currentItems={currentItems}
                            handleDeleteReview={handleDeleteReview}
                            handleShowEditReviewModal={handleShowEditReviewModal}
                            userInfo={userInfo}
                        />
                        {pageCount > 1 && (
                            <div className="d-flex justify-content-center mt-3">
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="next >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={pageCount}
                                    previousLabel="< previous"
                                    renderOnZeroPageCount={null}
                                    containerClassName="pagination"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link"
                                    activeClassName="active"
                                />
                            </div>
                        )}
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
