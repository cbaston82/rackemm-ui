import { userCanCreateEvents } from '../helpers/config'
import AlertMessageWithLinkEnd from '../components/AlertMessageWithLinkEnd'

function useCanUserCreateEventsAlertMessage() {
    const canUserCreateEventsAlertMessage = (stripeCustomer, userEvents, type) => {
        if (userCanCreateEvents(stripeCustomer, userEvents, type)) {
            return (
                <AlertMessageWithLinkEnd
                    className="alert alert-info mt-3"
                    path={`/account/${type}/create`}
                    linkText="Create event"
                    message="You have no events yet."
                />
            )
        }

        return (
            <AlertMessageWithLinkEnd
                path="/pricing"
                linkText="Subscribe now"
                message="You have no active subscription."
            />
        )
    }
    return [canUserCreateEventsAlertMessage]
}

export default useCanUserCreateEventsAlertMessage
