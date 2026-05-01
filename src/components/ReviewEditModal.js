import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import CustomLoader from './CustomeLoader'

function ReviewEditModal({
    reviewToEdit,
    handleEditReview,
    showEditModal,
    handleCloseEditReviewModal,
    givenReview,
}) {
    const [review, setReview] = useState(reviewToEdit.review)
    const [rating, setRating] = useState(reviewToEdit.rating)

    useEffect(() => {
        setRating(reviewToEdit.rating)
        setReview(reviewToEdit.review)
    }, [reviewToEdit])

    return (
        <Modal
            show={showEditModal}
            onHide={handleCloseEditReviewModal}
            contentClassName="bg-dark border-secondary"
        >
            <Modal.Header closeButton className="border-secondary">
                <Modal.Title>
                    <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">
                        Edit Review
                    </h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {givenReview && givenReview.loading ? (
                    <CustomLoader loaderMessage="Sending feedback." color="white" />
                ) : (
                    <>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="text-white-50 mb-1">Rating</label>
                                    <select
                                        onChange={(e) => setRating(e.target.value)}
                                        className="form-control bg-dark text-white border-secondary"
                                        name="rating"
                                        value={rating}
                                    >
                                        <option value="">Rating...</option>
                                        <option value="1">1 - Poor</option>
                                        <option value="2">2 - Fair</option>
                                        <option value="3">3 - Good</option>
                                        <option value="4">4 - Very Good</option>
                                        <option value="5">5 - Excellent</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-group">
                                    <label className="text-white-50 mb-1">Review</label>
                                    <textarea
                                        placeholder="Share your thoughts on this event to help others"
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        className="form-control bg-dark text-white border-secondary"
                                        name="review"
                                        id=""
                                        cols="30"
                                        rows="10"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer className="border-secondary">
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleCloseEditReviewModal}
                >
                    Close
                </button>
                <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={() => handleEditReview(rating, review, reviewToEdit._id)}
                >
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReviewEditModal
