import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import StarRatings from 'react-star-ratings'
import axios from 'axios'
import { getApiUrl } from '../helpers'

function useRateEventSwalModal() {
    const MySwal = withReactContent(Swal)

    const rateEvent = async (rating, auth, eventId) => {
        MySwal.fire({
            title: 'Review this event',
            html: (
                <StarRatings
                    rating={rating}
                    starRatedColor="gold"
                    starDimension="30px"
                    numberOfStars={5}
                    starSpacing="3px"
                    name="rating"
                />
            ),
            input: 'textarea',
            inputAttributes: {
                autocapitalize: 'off',
            },
            showCancelButton: true,
            confirmButtonColor: '#00cdcd',
            confirmButtonText: 'Submit review',
            showLoaderOnConfirm: true,
            preConfirm: (review) =>
                axios
                    .post(
                        `${getApiUrl()}events/${eventId}/reviews`,
                        {
                            review,
                            rating,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${auth.user.token}`,
                            },
                        },
                    )
                    .then((response) => {
                        window.location.reload()
                    })
                    .catch((error) => {
                        let responseError = error.response.data.message
                        if (responseError.includes('duplicate key error')) {
                            responseError = 'You can not give more than one review per event'
                        }
                        Swal.showValidationMessage(responseError)
                    }),

            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    confirmButtonColor: '#00cdcd',
                    title: 'Your review has been received',
                    text: 'Your review will help pool players everywhere!',
                })
            }
        })
    }
    return [rateEvent]
}

export default useRateEventSwalModal
