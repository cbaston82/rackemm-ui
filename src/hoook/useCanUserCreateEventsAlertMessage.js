import { canUserCreateEvents } from '../helpers/config'
import AlertMessageWithLinkEnd from '../components/AlertMessageWithLinkEnd'

function useCanUserCreateEventsAlertMessage() {
    const canUserCreateEventsAlertMessage = (stripeCustomer, userEvents, type) => {
        if (canUserCreateEvents(stripeCustomer, userEvents, type)) {
            return (
                <AlertMessageWithLinkEnd
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
