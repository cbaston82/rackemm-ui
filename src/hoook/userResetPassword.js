import { useState } from 'react'
import { toast } from 'react-toastify'

function useResetPassword(resetPasswordAction) {
    const [resetPasswordForm, setResetPasswordForm] = useState({
        password: '',
        passwordConfirm: '',
    })

    const handleResetPasswordSubmit = async (e, resetToken) => {
        e.preventDefault()

        if (resetPasswordForm.password !== resetPasswordForm.passwordConfirm) {
            return toast.error('Passwords do not match')
        }

        resetPasswordAction(resetToken, resetPasswordForm)
    }

    const handleInputChange = (e) => {
        setResetPasswordForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return { handleResetPasswordSubmit, handleInputChange, resetPasswordForm }
}

export default useResetPassword
