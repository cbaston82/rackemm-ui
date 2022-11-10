import { FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { userCanCreateEvents, userHasValidSubscription } from '../helpers/config'
import AlertMessage from '../components/AlertMessage'
import Button from '../components/Button'

function useSubscriptionHooks() {
    const handleNoSubscriptionToast = (stripeCustomer, userCreatedEvents = [], type = '') => {
        if (!userHasValidSubscription(stripeCustomer)) {
            return toast.info('You need a valid subscription for this feature.')
        }

        if (!userCanCreateEvents(stripeCustomer, userCreatedEvents, type)) {
            return toast.info(
                `You have reached the max allowed ${type} events. Consider upgrading your plan.`,
            )
        }
    }

    const canUserCreateEventsAlertMessage = (stripeCustomer, userEvents, type) => {
        if (userCanCreateEvents(stripeCustomer, userEvents, type)) {
            return (
                <AlertMessage
                    className="alert alert-info mt-3"
                    path={`/account/${type}/create`}
                    linkText="Create event"
                    message="You have no events yet."
                />
            )
        }

        return (
            <AlertMessage
                path="/pricing"
                linkText="Subscribe now"
                message="You have no active subscription."
            />
        )
    }

    const canUserCreateEventButton = (stripeCustomer, userCreatedEvents, type) => {
        if (!userCanCreateEvents(stripeCustomer, userCreatedEvents, type)) {
            return (
                <Button
                    disabled
                    onClick={() =>
                        handleNoSubscriptionToast(stripeCustomer, userCreatedEvents, type)
                    }
                    buttonText="New Event"
                    className="btn btn-outline-warning btn-sm"
                >
                    <FaPlus />
                </Button>
            )
        }

        return (
            <Button
                buttonText="New Event"
                className="btn btn-outline-secondary btn-sm"
                path={`/account/${type}/create`}
            >
                <FaPlus />
            </Button>
        )
    }

    return { canUserCreateEventsAlertMessage, canUserCreateEventButton, handleNoSubscriptionToast }
}

export default useSubscriptionHooks
