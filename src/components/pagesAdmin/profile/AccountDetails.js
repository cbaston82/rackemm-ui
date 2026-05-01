function AccountDetails({ handleOnChangeUserInfo, userInfoForm, handleUserInfoUpdate }) {
    return (
        <div className="col-xl-12">
            <div className="card rounded-0 mb-4 bg-dark border-secondary">
                <div className="card-header text-white border-secondary">Account Details</div>
                <div className="card-body">
                    <form onSubmit={handleUserInfoUpdate}>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text-white-50" htmlFor="firstName">
                                    Full name
                                </label>
                                <input
                                    className="form-control bg-dark text-white border-secondary"
                                    name="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    onChange={(e) => handleOnChangeUserInfo(e)}
                                    value={userInfoForm.fullName}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text-white-50" htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    className="form-control bg-dark text-white border-secondary"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    onChange={(e) => handleOnChangeUserInfo(e)}
                                    value={userInfoForm.email}
                                />
                            </div>
                        </div>
                        <button className="btn btn-outline-warning" type="submit">
                            Save changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AccountDetails
