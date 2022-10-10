import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import axios from 'axios'
import { getApiUrl } from '../helpers'

function useDeleteReviewSwalModal(auth) {
    const MySwal = withReactContent(Swal)

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
                    .delete(`${getApiUrl()}reviews/${id}`, {
                        headers: {
                            Authorization: `Bearer ${auth.user.token}`,
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

    return [handleDeleteReview]
}

export default useDeleteReviewSwalModal
