import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import axios from 'axios'
import { getApiUrl } from '../helpers'

function useReviewHooks(callBack = null, auth = null) {
    const MySwal = withReactContent(Swal)

    const handleSaveReview = (rating, review, id) => {
        callBack(rating, review, id)
    }

    const handleEditReview = (rating, review, id) => {
        callBack(rating, review, id)
    }

    const handleDeleteReview = async (id) => {
        MySwal.fire({
            showCancelButton: true,
            title: 'Are you sure?',
            text: "This can't be undone",
            confirmButtonColor: 'red',
            confirmButtonText: 'Yes, delete!',
            icon: 'question',
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete.isConfirmed) {
                axios
                    .delete(`${getApiUrl()}/reviews/${id}`, {
                        headers: {
                            Authorization: `Bearer ${auth.token}`,
                        },
                    })
                    .then((response) => {
                        window.location.reload()
                    })
                    .catch((error) => {
                        console.log(error)
                    })

                MySwal.fire({
                    confirmButtonColor: '#00cdcd',
                    title: 'Successfully deleted.',
                    icon: 'success',
                })
            }
        })
    }

    return { handleDeleteReview, handleSaveReview, handleEditReview }
}

export default useReviewHooks
