import axios from 'axios'
import { getApiUrl } from '../helpers'

function useLoadUserStripeAccountDetails(auth, stripeCustomer) {
    const loadUserStripeAccountDetails = async (e) => {
        e.preventDefault()

        await axios
            .post(
                `${getApiUrl()}/stripe/create-portal-session`,
                {
                    customerId: stripeCustomer.customer.customerId,
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

    return [loadUserStripeAccountDetails]
}

export default useLoadUserStripeAccountDetails
