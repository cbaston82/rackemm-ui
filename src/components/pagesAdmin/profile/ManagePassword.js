import CustomLoader from '../../CustomeLoader'

function ManagePassword({
    handlePasswordUpdate,
    handleOnChangePassword,
    updatePasswordForm,
    auth,
}) {
    return (
        <div className="col-xl-12">
            <div className="card rounded-0 mt-4">
                <div className="card-header">Manage Password</div>
                <div className="card-body">
                    {auth.loading ? (
                        <CustomLoader loaderMessage="Updating password" color="black" />
                    ) : (
                        <form onSubmit={handlePasswordUpdate}>
                            <div className="row gx-3 mb-3">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <input
                                            placeholder="Current password"
                                            className="form-control"
                                            value={updatePasswordForm.currentPassword}
                                            onChange={handleOnChangePassword}
                                            type="password"
                                            name="password"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <input
                                            placeholder="New password"
                                            value={updatePasswordForm.newPassword}
                                            className="form-control"
                                            onChange={handleOnChangePassword}
                                            type="password"
                                            name="newPassword"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <input
                                            placeholder="Confirm new password"
                                            className="form-control"
                                            value={updatePasswordForm.newPasswordConfirm}
                                            onChange={handleOnChangePassword}
                                            type="password"
                                            name="newPasswordConfirm"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="form-control btn btn-outline-warning"
                                        >
                                            Change Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ManagePassword
