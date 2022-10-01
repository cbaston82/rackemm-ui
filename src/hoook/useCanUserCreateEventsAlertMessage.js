import { userCanCreateEvents } from '../helpers/config'
import AlertMessage from '../components/AlertMessage'

function useCanUserCreateEventsAlertMessage() {
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
    return [canUserCreateEventsAlertMessage]
}

export default useCanUserCreateEventsAlertMessage
