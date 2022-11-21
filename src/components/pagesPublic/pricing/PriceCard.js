import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { disableSubscription } from '../../../helpers'

function PriceCard({ auth, checkoutUser, plan, subscriptionPlanId, loadUserStripeAccountDetails }) {
    return (
        <div className="card col-sm-12 col-lg-3 card-pricing text-center px-3 mb-4 rounded-0 border-0">
            <span className="h6 w-75 mx-auto px-4 py-1 rackemm-bg-cyan rounded-bottom text-white shadow-sm">
                {plan.name}
            </span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h2 className="h2 fw-normal text-primary text-center mb-2" data-pricing-value="15">
                    <span className="text-secondary fw-bolder">${plan.price}</span>
                    <span className="h6 text-black-50 fw-light m-2">/ month</span>
                </h2>
            </div>
            <div className="card-body d-flex flex-column justify-content-between pt-0">
                <div>
                    <ul className="list-unstyled mb-4">
                        {plan.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                    <hr />
                    <p className="text-black-50 p-4">{plan.description}</p>
                </div>
                {process.env.NODE_ENV === 'production' && disableSubscription && (
                    <>
                        {auth.user.email ? (
                            <>
                                {subscriptionPlanId === plan.subscriptionPlanId && (
                                    <button
                                        disabled
                                        className="btn disabled btn-outline-success mb-3"
                                        id=" checkout-and-portal-button btn btn-outline-secondary mb-3"
                                        type="submit"
                                    >
                                        <FaCheck /> Subscribed
                                    </button>
                                )}
                                {subscriptionPlanId !== '' &&
                                    subscriptionPlanId !== plan.subscriptionPlanId && (
                                        <form onSubmit={loadUserStripeAccountDetails}>
                                            <button
                                                className="btn btn-outline-secondary mb-3"
                                                id=" checkout-and-portal-button btn btn-outline-secondary mb-3"
                                                type="submit"
                                            >
                                                Change Subscription
                                            </button>
                                        </form>
                                    )}
                                {subscriptionPlanId === '' && (
                                    <form
                                        onSubmit={(e) => checkoutUser(e, plan.subscriptionPlanId)}
                                    >
                                        <button
                                            className="btn btn-outline-secondary mb-3"
                                            id=" checkout-and-portal-button btn btn-outline-secondary mb-3"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                )}
                            </>
                        ) : (
                            <Link to="/login">
                                <button type="button" className="btn btn-outline-secondary mb-3">
                                    Sign Up
                                </button>
                            </Link>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default PriceCard
