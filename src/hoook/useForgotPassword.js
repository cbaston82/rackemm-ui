import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { getApiUrl } from '../helpers'

function useForgotPassword() {
    const [loading, setLoading] = useState(false)
    const [forgotPasswordForm, setForgotPasswordForm] = useState({
        email: '',
    })

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault()

        if (forgotPasswordForm.email === '') {
            return toast.error('Email cannot be blank')
        }

        setLoading(true)

        await axios
            .post(`${getApiUrl()}auth/forgot-password`, forgotPasswordForm)
            .then((response) => {
                setLoading(false)
                toast.success(response.data.message)
            })
            .catch((error) => {
                setLoading(false)
                toast.error(error.response.data.message)
            })
    }

    const handleInputChange = (e) => {
        setForgotPasswordForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return [handleForgotPasswordSubmit, handleInputChange, loading, forgotPasswordForm]
}

export default useForgotPassword
