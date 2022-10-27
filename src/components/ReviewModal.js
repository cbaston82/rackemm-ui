import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CustomLoader from './CustomeLoader'

function ReviewModal({ handleSaveReview, show, handleCloseReviewModal, event, givenReview }) {
    const [review, setReview] = useState('')
    const [rating, setRating] = useState()

    return (
        <Modal show={show} onHide={handleCloseReviewModal}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Write a review
                    </h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {givenReview && givenReview.loading ? (
                    <CustomLoader loaderMessage="Sending feedback." color="black" />
                ) : (
                    <>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="">Rating</label>
                                    <select
                                        onChange={(e) => setRating(e.target.value)}
                                        className="form-control"
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
                                    <label htmlFor="">Review</label>
                                    <textarea
                                        placeholder="Share your thoughts on this event to help others"
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        className="form-control"
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
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseReviewModal}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => handleSaveReview(rating, review, event._id)}
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReviewModal
