import { userCanCreateEvents } from '../helpers/config'
import Button from '../components/Button'
import { FaPlus } from 'react-icons/fa'
import useNoSubscriptionToast from './useNoSubscriptionToast'

function useCanUserCreateEventsButton() {
    const [handleNoSubscriptionToast] = useNoSubscriptionToast()

    const canUserCreateEventButton = (stripeCustomer, userWeeklyEvents, type) => {
        if (!userCanCreateEvents(stripeCustomer, userWeeklyEvents, type)) {
            return (
                <Button
                    disabled={true}
                    onClick={handleNoSubscriptionToast}
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
