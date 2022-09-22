import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

function useDeleteSwalModal(deleteEvent) {
    const MySwal = withReactContent(Swal)

    const handleDeleteEvent = async (id) => {
        MySwal.fire({
            showCancelButton: true,
            title: 'Are you sure?',
            text: 'You want to delete this event?',
            confirmButtonColor: '#00cdcd',
            confirmButtonText: 'Yes, delete this event!',
            icon: 'question',
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete.isConfirmed) {
                console.log('deleting', id)
                deleteEvent(id)

                MySwal.fire({
                    confirmButtonColor: '#00cdcd',
                    title: 'Your event has been deleted',
                    icon: 'success',
                })
            }
        })
    }

    return [handleDeleteEvent]
}

export default useDeleteSwalModal
