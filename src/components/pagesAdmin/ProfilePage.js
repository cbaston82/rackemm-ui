import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserStripeCustomer } from '../../redux'
import axios from 'axios'
import { getApiUrl } from '../../helpers/config'
import CustomLoader from '../pagesPublic/tables/CustomeLoader'

function ProfilePage({ auth, getUserStripeCustomer, stripeCustomer }) {
    const initialValues = {
        fullName: auth.user.fullName ?? '',
        email: auth.user.email ?? '',
    }

    const [userInfo, setUserInfo] = useState(initialValues)
    let [sessionId, setSessionId] = useState('')

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }

    useEffect(() => {
        const query = new URLSearchParams(window.location.search)

        if (query.get('success')) {
            setSessionId(query.get('session_id'))
        }
        getUserStripeCustomer()
    }, [sessionId, getUserStripeCustomer])

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
        <section id="profile-section">
            {stripeCustomer.loading ? (
                <CustomLoader loaderMessage="Fetching user data." color="white" />
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card text-white mb-4">
                                <div className="card-header">Account Details</div>
                                <div className="card-body">
                                    <form>
                                        <div className="row gx-3 mb-3">
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="firstName">
                                                    First name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="fullName"
                                                    type="text"
                                                    placeholder="Enter your first name"
                                                    onChange={(e) => handleOnChange(e)}
                                                    value={userInfo.fullName}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="small mb-1" htmlFor="email">
                                                    Email address
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    onChange={(e) => handleOnChange(e)}
                                                    value={userInfo.email}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-outline-secondary text-white-50"
                                            type="button"
                                        >
                                            Save changes
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {stripeCustomer.customer.customerId !== '' && (
                            <div className="col-xl-12">
                                <div className="card text-white">
                                    <div className="card-header">Billing Details</div>
                                    <div className="card-body">
                                        <form onSubmit={loadUserStripeAccountDetails}>
                                            <input
                                                type="hidden"
                                                id="customer-id"
                                                name="customer_id"
                                                value={stripeCustomer.customer.customerId}
                                            />
                                            <button
                                                className="btn btn-outline-secondary text-white-50 mb-3"
                                                id="checkout-and-portal-button"
                                                type="submit"
                                            >
                                                Manage
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    getUserStripeCustomer: () => dispatch(getUserStripeCustomer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
