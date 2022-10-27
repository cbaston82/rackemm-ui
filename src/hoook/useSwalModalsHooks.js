import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

function useSwalModalHooks(callBack = null) {
    const MySwal = withReactContent(Swal)

    const handleDelete = async (id) => {
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
                callBack(id)

                MySwal.fire({
                    confirmButtonColor: '#00cdcd',
                    title: 'Successfully deleted.',
                    icon: 'success',
                })
            }
        })
    }

    return { handleDelete }
}

export default useSwalModalHooks
