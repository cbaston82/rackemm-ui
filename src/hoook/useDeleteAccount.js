import { useState } from 'react'
import MySwal from 'sweetalert2'
import axios from 'axios'
import { toast } from 'react-toastify'
import { getApiUrl } from '../helpers'

function useDeleteAccount(auth, logoutUser) {
    const [loading, setLoading] = useState(false)

    const [deleteAccountForm, setDeleteAccountForm] = useState({
        confirm: '',
    })

    const handleDeleteAccount = async (e) => {
        e.preventDefault()

        if (deleteAccountForm.confirm === 'DELETE') {
            MySwal.fire({
                showCancelButton: true,
                title: 'Are you sure?',
                text: "This can't be undone",
                confirmButtonColor: 'red',
                confirmButtonText: 'Yes, delete!',
                icon: 'question',
                dangerMode: true,
            }).then(async (willDelete) => {
                if (willDelete.isConfirmed) {
                    setLoading(true)

                    await axios
                        .delete(`${getApiUrl()}/users/deleteMe`, {
                            headers: {
                                Authorization: `Bearer ${auth.token}`,
                            },
                        })
                        .then((response) => {
                            setLoading(false)
                            toast.success('Account deleted successfully')
                            logoutUser()
                        })
                        .catch(() => {
                            setLoading(false)
                            toast.error('Could not delete account')
                        })

                    MySwal.fire({
                        confirmButtonColor: '#00cdcd',
                        title: 'Successfully deleted.',
                        icon: 'success',
                    })
                }
            })
        }
    }

    const handleOnChangeDeleteAccount = (e) => {
        setDeleteAccountForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return { handleDeleteAccount, loading, handleOnChangeDeleteAccount, deleteAccountForm }
}

export default useDeleteAccount
