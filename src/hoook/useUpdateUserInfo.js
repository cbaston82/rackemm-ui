import { useState } from 'react'

function useUpdateUserInfo(auth) {
    const userInfoFormValues = {
        fullName: auth.user.fullName ? auth.user.fullName : '',
        email: auth.user.email ? auth.user.email : '',
    }

    const [userInfoForm, setUserInfoForm] = useState(userInfoFormValues)

    const handleOnChangeUserInfo = (e) => {
        const { name, value } = e.target

        setUserInfoForm({
            ...userInfoForm,
            [name]: value,
        })
    }

    return [handleOnChangeUserInfo, userInfoForm]
}

export default useUpdateUserInfo
