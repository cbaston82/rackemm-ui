import React, { useState } from 'react'
import { MoonLoader } from 'react-spinners'
import { connect } from 'react-redux'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signupUser } from '../../redux'
import usePageTitle from '../../hoook/usePageTitle'

function Register({ signupUser, auth }) {
    usePageTitle('- Register')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
        fullName: '',
    })

    const { email, password, password2, fullName } = formData

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            return toast.error('Passwords do not match')
        } else {
            signupUser(formData)
        }
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
                <h1 className="text-white">
                    <FaUserAlt className="rackemm-text-cyan" /> Register
                </h1>
                <p className="h5 text-white-50 mt-3">Please create an account</p>
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
                                            Full Name
                                        </label>
                                        <input
                                            onChange={handleOnChange}
                                            type="text"
                                            name="fullName"
                                            className="form-control"
                                            value={fullName}
                                            placeholder="Full Name"
                                        />
                                    </div>
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
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleFormControlInput1"
                                            className="form-label"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            onChange={handleOnChange}
                                            type="password"
                                            name="password2"
                                            className="form-control"
                                            value={password2}
                                            placeholder="Confirm your password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button
                                            type="submit"
                                            className="form-control btn btn-outline-secondary"
                                        >
                                            Sign up
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
    signupUser: (user) => dispatch(signupUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
