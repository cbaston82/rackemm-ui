import CustomLoader from '../../CustomeLoader'

function DeleteAccount({
    handleDeleteAccount,
    loading,
    deleteAccountForm,
    handleOnChangeDeleteAccount,
}) {
    return (
        <div className="col-xl-12 mt-4">
            <div className="card rounded-0">
                <div className="card-header text-danger">Delete Account</div>
                <div className="card-body">
                    {loading ? (
                        <CustomLoader loaderMessage="Deleting account" color="black" />
                    ) : (
                        <form onSubmit={handleDeleteAccount}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        className="form-control"
                                        name="confirm"
                                        type="text"
                                        placeholder="Type 'DELETE' to confirm"
                                        onChange={(e) => handleOnChangeDeleteAccount(e)}
                                        value={deleteAccountForm.confirm}
                                    />
                                </div>
                                <div className="col-md-4 col-lg-3">
                                    <button
                                        disabled={deleteAccountForm.confirm !== 'DELETE'}
                                        className="btn btn-danger mb-3 form-control"
                                        type="submit"
                                    >
                                        Delete account
                                    </button>
                                </div>
                            </div>
                            <div className="alert alert-danger rounded-0" role="alert">
                                This will permanently remove your billing information and
                                immediately cancel any current subscriptions you have. You will be
                                logged out and you will not be able to recover any of your data.
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DeleteAccount
