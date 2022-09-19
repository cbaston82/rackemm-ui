import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

function PriceCard({ auth, checkoutUser, plan, subscriptionPlanId }) {
    return (
        <div className="card col-sm-12 col-lg-3 card-pricing text-center px-3 mb-4">
            <span className="h6 w-75 mx-auto px-4 py-1 rounded-bottom text-white shadow-sm">
                {plan.name}
            </span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h2 className="h2 fw-normal text-primary text-center mb-2" data-pricing-value="15">
                    <span className="price">
                        <span className="text-decoration-line-through text-danger">
                            ${plan.price}
                        </span>
                        {' - '}
                        <span className="text-primary">$0</span>
                    </span>
                    <span className="h6 text-black-50 m-2">/ month</span>
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
                    <p className="text-black-50 p-4">
                        Geared towards the regular player that might throw a tournament every now
                        and again. Or a player wanting to unlock the following{' '}
                    </p>
                </div>

                {auth.user.email ? (
                    <>
                        {subscriptionPlanId !== plan.subscriptionPlanId ? (
                            <form onSubmit={(e) => checkoutUser(e, plan.subscriptionPlanId)}>
                                <button
                                    className="btn btn-outline-secondary mb-3"
                                    id=" checkout-and-portal-button btn btn-outline-secondary mb-3"
                                    type="submit"
                                >
                                    Subscribe
                                </button>
                            </form>
                        ) : (
                            <button
                                disabled
                                className="btn disabled btn-outline-success mb-3"
                                id=" checkout-and-portal-button btn btn-outline-secondary mb-3"
                                type="submit"
                            >
                                <FaCheck /> Subscribed
                            </button>
                        )}
                    </>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-outline-secondary mb-3">Sign Up</button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default PriceCard
