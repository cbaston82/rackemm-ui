import { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getApiUrl } from '../../../helpers'
import { plans } from '../../../helpers/plans'
import PriceCard from './PriceCard'
import usePageTitle from '../../../hoook/usePageTitle'

function Pricing({ auth, stripeCustomer }) {
    usePageTitle('- Pricing')
    useEffect(() => {}, [])

    const checkoutUser = async (e, priceId) => {
        e.preventDefault()

        await axios
            .post(
                `${getApiUrl()}stripe/checkout-user`,
                {
                    priceId: priceId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${auth.user.token}`,
                    },
                },
            )
            .then((data) => {
                window.location.replace(data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const loadUserStripeAccountDetails = async (e) => {
        e.preventDefault()

        await axios
            .post(
                `${getApiUrl()}stripe/create-portal-session`,
                {
                    customerId: stripeCustomer.customer.customerId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${auth.user.token}`,
                    },
                },
            )
            .then((data) => {
                window.location.replace(data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="container" id="pricing-section">
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
