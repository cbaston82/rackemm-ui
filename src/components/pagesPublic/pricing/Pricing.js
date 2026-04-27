import { connect } from 'react-redux'
import { plans } from '../../../helpers/plans'
import PriceCard from './PriceCard'
import usePageTitle from '../../../hoook/usePageTitle'
import useLoadUserStripeAccountDetails from '../../../hoook/useLoadUserStripeAccountDetails'
import useCheckoutUser from '../../../hoook/useCheckoutUser'
import { disableSubscription } from '../../../helpers'

function Pricing({ auth, stripeCustomer }) {
    usePageTitle('- Pricing')
    const { loadUserStripeAccountDetails } = useLoadUserStripeAccountDetails(auth, stripeCustomer)
    const [checkoutUser] = useCheckoutUser(auth)

    return (
        <div className="container" id="pricing-section">
            {disableSubscription() === 'true' && (
                <div className="alert alert-warning rounded-0 text-center" role="alert">
                    Subscriptions are currently disabled for demo purposes. This is a portfolio
                    project — no real payments are processed.
                </div>
            )}
            <div className="row">
                <div className="pricing card-deck d-lg-flex justify-content-between mb-3">
                    {plans.map((plan) => (
                        <PriceCard
                            loadUserStripeAccountDetails={loadUserStripeAccountDetails}
                            subscriptionPlanId={stripeCustomer.customer.subscriptionPlanId}
                            key={plan.name}
                            plan={plan}
                            auth={auth}
                            checkoutUser={checkoutUser}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    stripeCustomer: state.stripeCustomer,
})

export default connect(mapStateToProps, null)(Pricing)
