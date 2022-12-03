import { useState } from 'react'

function useUpdateUserInfo(updateMe, userInfo) {
    const userInfoFormValues = {
        fullName: userInfo.me.fullName ? userInfo.me.fullName : '',
        email: userInfo.me.email ? userInfo.me.email : '',
    }

    const [userInfoForm, setUserInfoForm] = useState(userInfoFormValues)

    const handleOnChangeUserInfo = (e) => {
        const { name, value } = e.target

        setUserInfoForm({
            ...userInfoForm,
            [name]: value,
        })
    }

    const handleUserInfoUpdate = (e) => {
        e.preventDefault()
        updateMe(userInfoForm)
    }

    return { handleOnChangeUserInfo, userInfoForm, handleUserInfoUpdate }
}

export default useUpdateUserInfo
