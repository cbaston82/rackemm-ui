import axios from 'axios'
import { getApiUrl } from '../helpers'

function useCheckoutUser(auth) {
    const checkoutUser = async (e, priceId) => {
        e.preventDefault()

        await axios
            .post(
                `${getApiUrl()}stripe/checkout-user`,
                {
                    priceId: priceId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${auth.user.token}`,
                    },
                },
            )
            .then((data) => {
                window.location.replace(data.data)
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error)
            })
    }

    return [checkoutUser]
}

export default useCheckoutUser
