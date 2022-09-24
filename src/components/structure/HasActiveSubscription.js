import { Navigate } from 'react-router-dom'
import { isSubscriptionValid } from '../../helpers/config'

const HasActiveSubscription = ({ auth, children, stripeCustomer }) => {
    if (!auth.user.email) {
        return <Navigate path="*" to="/" replace />
    }

    if (!stripeCustomer.customer.subscriptionStart) {
        return <Navigate path="*" to="/pricing" replace />
    }

    if (!isSubscriptionValid(stripeCustomer)) {
        return <Navigate path="*" to="/pricing" replace />
    }

    return children
}
export default HasActiveSubscription
