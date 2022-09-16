import React, { useState } from 'react'
import { MoonLoader } from 'react-spinners'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../redux'

function LoginPage({ loginUser, auth, getUserStripeCustomer }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const handleOnSubmit = (e) => {
        e.preventDefault()
        loginUser(formData)
    }

    const handleOnChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className="container">
            <div
                className="d-flex flex-column align-items-center justify-content-center"
                id="form-heading"
            >
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p className="h5 text-black-50 mt-3">Please login</p>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-sm-10 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            {auth.loading ? (
                                <div className="d-flex justify-content-center align-content-center">
                                    <MoonLoader size={150} loading={true} />
                                </div>
                            ) : (
                                <form onSubmit={handleOnSubmit}>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleFormControlInput1"
                                            className="form-label"
                                        >
                                            Email
                                        </label>
                                        <input
                                            onChange={handleOnChange}
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={email}
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleFormControlInput1"
                                            className="form-label"
                                        >
                                            Password
                                        </label>
                                        <input
                                            onChange={handleOnChange}
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={password}
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button
                                            type="submit"
                                            className="form-control btn btn-outline-secondary"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <span className="text-black-50">Already have an account?</span>{' '}
                                    <Link className="link-cyan" to="/login">
                                        Login
                                    </Link>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
