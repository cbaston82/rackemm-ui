import { toast } from 'react-toastify'
import { userCanCreateEvents, userSubscriptionValid } from '../helpers/config'

function useNoSubscriptionToast() {
    const handleNoSubscriptionToast = (stripeCustomer, userCreatedEvents = [], type = '') => {
        if (!userSubscriptionValid(stripeCustomer)) {
            return toast.info('Reactivate your subscription to continue')
        }

        if (!userCanCreateEvents(stripeCustomer, userCreatedEvents, type)) {
            return toast.info(
                `You have reached the max allowed ${type} events. Consider upgrading your plan.`,
            )
        }
    }
    return [handleNoSubscriptionToast]
}

export default useNoSubscriptionToast
