import { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import '../../pricing.css'
import { getApiUrl } from '../../helpers/config'
import { plans } from '../../helpers/config'
import PriceCard from '../PriceCard'

function PricingPage({ auth, stripeCustomer }) {
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

    return (
        <div className="container">
            <div className="row">
                <div className="pricing card-deck d-lg-flex justify-content-between mb-3">
                    {plans.map((plan) => (
                        <PriceCard
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

export default connect(mapStateToProps, null)(PricingPage)
