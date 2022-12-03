import { FaCheck, FaKey } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import usePageTitle from '../../hoook/usePageTitle'
import CustomLoader from '../CustomeLoader'
import useResetPassword from '../../hoook/userResetPassword'
import { resetPassword as resetPasswordAction } from '../../redux'

function resetPassword({ resetPasswordAction, auth }) {
    usePageTitle('- Forgot Password')

    const { resetToken } = useParams()

    const { handleResetPasswordSubmit, handleInputChange, resetPasswordForm } =
        useResetPassword(resetPasswordAction)

    return (
        <div className="container">
            <div
                className="d-flex flex-column align-items-center justify-content-center"
                id="form-heading"
            >
                <h1 className="text-white">
                    <FaKey className="rackemm-text-cyan" /> Reset Password
                </h1>
                <p className="h5 text-white-50 mt-3">Request password reset link</p>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-sm-10 col-md-6 col-lg-4">
                    {auth.loading ? (
                        <CustomLoader color="white" loaderMessage="Requesting reset link" />
                    ) : (
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={(e) => handleResetPasswordSubmit(e, resetToken)}>
                                    <div className="mb-3">
                                        <input
                                            autoComplete="false"
                                            onChange={handleInputChange}
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={resetPasswordForm.password}
                                            placeholder="New password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            autoComplete="false"
                                            onChange={handleInputChange}
                                            type="password"
                                            name="passwordConfirm"
                                            className="form-control"
                                            value={resetPasswordForm.passwordConfirm}
                                            placeholder="Confirm new password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button
                                            type="submit"
                                            className="form-control btn btn-outline-secondary"
                                        >
                                            Request Link {auth.loading && <FaCheck />}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    resetPasswordAction: (resetToken, resetPasswordForm) =>
        dispatch(resetPasswordAction(resetToken, resetPasswordForm)),
})

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, mapDispatchToProps)(resetPassword)
