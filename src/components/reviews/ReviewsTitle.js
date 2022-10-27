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
        <div className="row d-flex flex-row-reverse">
            <div className="col d-flex justify-content-between border-bottom">
                <h5 className="fw-bolder mt-4 mt-sm-0">Reviews</h5>
                {userIsLoggedIn(auth) ? (
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
                            <Button
                                onClick={() => handleShowEditReviewModal(userCreatedReview)}
                                className="btn btn-success btn-sm mb-2"
                                buttonText="Edit review"
                            >
                                <FiMessageSquare />
                            </Button>
                        )}
                    </>
                ) : (
                    <Button
                        onClick={() => handleNotAuthenticatedToast(auth)}
                        className="btn btn-success btn-sm mb-2"
                        buttonText="Write a review"
                    >
                        <FiMessageSquare />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default ReviewsTitle
