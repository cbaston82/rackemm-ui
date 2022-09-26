import { userCanCreateEvents } from '../helpers/config'
import Button from '../components/Button'
import { FaPlus } from 'react-icons/fa'
import useNoSubscriptionToast from './useNoSubscriptionToast'

function useCanUserCreateEventsButton() {
    const [handleNoSubscriptionToast] = useNoSubscriptionToast()

    const canUserCreateEventButton = (stripeCustomer, userCreatedEvents, type) => {
        if (!userCanCreateEvents(stripeCustomer, userCreatedEvents, type)) {
            return (
                <Button
                    disabled={true}
                    onClick={() =>
                        handleNoSubscriptionToast(stripeCustomer, userCreatedEvents, type)
                    }
                    buttonText="New Event"
                    className="btn btn-outline-secondary btn-sm"
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

    return [canUserCreateEventButton]
}

export default useCanUserCreateEventsButton
