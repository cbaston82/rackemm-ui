import React, { useState } from 'react'
import axios from 'axios'
import { FaKey, FaCheck } from 'react-icons/fa'
import { toast } from 'react-toastify'
import usePageTitle from '../../hoook/usePageTitle'
import { getApiUrl } from '../../helpers'
import CustomLoader from '../CustomeLoader'

function ForgotPassword() {
    usePageTitle('- Forgot Password')

    const [tokenSent, setTokenSent] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
    })

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        if (formData.email === '') {
            return toast.error('Email cannot be blank')
        }

        setTokenSent(true)

        await axios
            .post(`${getApiUrl()}auth/forgot-password`, formData)
            .then((response) => {
                setTokenSent(false)
                toast.success(response.data)
            })
            .catch((error) => {
                setTokenSent(false)
                toast.error(error.response.data.error)
            })
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
                    <FaKey className="rackemm-text-cyan" /> Forgot Password
                </h1>
                <p className="h5 text-white-50 mt-3">Request password reset link</p>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-sm-10 col-md-6 col-lg-4">
                    {tokenSent ? (
                        <CustomLoader color="white" loaderMessage="Requesting reset link" />
                    ) : (
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleOnSubmit}>
                                    <div className="mb-3">
                                        <input
                                            onChange={handleOnChange}
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            placeholder="Please enter your email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button
                                            disabled={!formData.email}
                                            type="submit"
                                            className="form-control btn btn-outline-secondary"
                                        >
                                            Request Link {tokenSent && <FaCheck />}
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
