import { FaKey, FaCheck } from 'react-icons/fa'
import usePageTitle from '../../hoook/usePageTitle'
import CustomLoader from '../CustomeLoader'
import useForgotPassword from '../../hoook/useForgotPassword'

function ForgotPassword() {
    usePageTitle('- Forgot Password')
    const [handleForgotPasswordSubmit, handleInputChange, loading, forgotPasswordForm] =
        useForgotPassword()

    return (
        <div className="container">
            <div
                className="d-flex flex-column align-items-center justify-content-center"
                id="form-heading"
            >
                <h1 className="text-white">
                    <FaKey className="rackemm-text-cyan" /> Forgot Password
                </h1>
                <p className="h5 text-white-50 mt-3">Request password reset link</p>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-sm-10 col-md-6 col-lg-4">
                    {loading ? (
                        <CustomLoader color="white" loaderMessage="Requesting reset link" />
                    ) : (
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleForgotPasswordSubmit}>
                                    <div className="mb-3">
                                        <input
                                            onChange={handleInputChange}
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={forgotPasswordForm.email}
                                            placeholder="Please enter your email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button
                                            disabled={!forgotPasswordForm.email}
                                            type="submit"
                                            className="form-control btn btn-outline-secondary"
                                        >
                                            Request Link {loading && <FaCheck />}
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

export default ForgotPassword
