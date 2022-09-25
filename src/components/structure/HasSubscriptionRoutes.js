import { Navigate } from 'react-router-dom'

const HasSubscriptionRoutes = ({ auth, children, stripeCustomer }) => {
    if (!auth.user.email) {
        return <Navigate path="*" to="/" replace />
    }

    if (!stripeCustomer.customer.subscriptionStart) {
        return <Navigate path="*" to="/pricing" replace />
    }

    // if (!isSubscriptionValid(stripeCustomer)) {
    //     return <Navigate path="*" to="/pricing" replace />
    // }

    return children
}
export default HasSubscriptionRoutes
