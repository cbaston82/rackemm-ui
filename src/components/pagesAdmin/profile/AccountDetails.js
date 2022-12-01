function AccountDetails({ handleOnChangeUserInfo, userInfoForm }) {
    return (
        <div className="col-xl-12">
            <div className="card rounded-0 mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                    <form>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" htmlFor="firstName">
                                    First name
                                </label>
                                <input
                                    className="form-control"
                                    name="fullName"
                                    type="text"
                                    readOnly
                                    placeholder="Enter your first name"
                                    onChange={(e) => handleOnChangeUserInfo(e)}
                                    value={userInfoForm.fullName}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    type="email"
                                    readOnly
                                    placeholder="Enter your email address"
                                    onChange={(e) => handleOnChangeUserInfo(e)}
                                    value={userInfoForm.email}
                                />
                            </div>
                        </div>
                        {/*<button className="btn btn-outline-secondary text-black-50" type="button">*/}
                        {/*    Save changes*/}
                        {/*</button>*/}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AccountDetails
