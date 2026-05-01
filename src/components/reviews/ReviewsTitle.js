import { FiMessageSquare } from 'react-icons/fi'
import { userIsLoggedIn } from '../../helpers/config'
import Button from '../Button'

function ReviewsTitle({
    handleNotAuthenticatedToast,
    handleShowEditReviewModal,
    userCreatedReview,
    handleShowReviewModal,
    auth,
}) {
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-3 mb-3">
            <h5 className="text-white fw-bold mb-0">Reviews</h5>
            {userIsLoggedIn(auth) ? (
                <>
                    {!userCreatedReview ? (
                        <Button
                            onClick={handleShowReviewModal}
                            className="btn btn-outline-warning btn-sm"
                            buttonText="Write a review"
                        >
                            <FiMessageSquare />
                        </Button>
                    ) : (
                        <Button
                            onClick={() => handleShowEditReviewModal(userCreatedReview)}
                            className="btn btn-outline-warning btn-sm"
                            buttonText="Edit your review"
                        >
                            <FiMessageSquare />
                        </Button>
                    )}
                </>
            ) : (
                <Button
                    onClick={() => handleNotAuthenticatedToast(auth)}
                    className="btn btn-outline-warning btn-sm"
                    buttonText="Write a review"
                >
                    <FiMessageSquare />
                </Button>
            )}
        </div>
    )
}

export default ReviewsTitle
