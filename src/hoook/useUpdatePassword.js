import { useState } from 'react'

function useUpdatePassword(auth, updatePassword) {
    const updatePasswordFormValues = {
        password: '',
        newPassword: '',
        newPasswordConfirm: '',
    }

    const [updatePasswordForm, setUpdatePasswordForm] = useState(updatePasswordFormValues)

    const handleOnChangePassword = (e) => {
        const { name, value } = e.target

        setUpdatePasswordForm({
            ...updatePasswordForm,
            [name]: value,
        })
    }

    const handlePasswordUpdate = (e) => {
        e.preventDefault()
        updatePassword(updatePasswordForm)
    }

    return { handlePasswordUpdate, handleOnChangePassword, updatePasswordForm }
}

export default useUpdatePassword
