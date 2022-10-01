import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserStripeCustomer, updatePassword } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import usePageTitle from '../../../hoook/usePageTitle'
import AccountDetails from './AccountDetails'
import BillingDetails from './BillingDetails'
import useLoadUserStripeAccountDetails from '../../../hoook/useLoadUserStripeAccountDetails'
import useUpdatePassword from '../../../hoook/useUpdatePassword'
import useUpdateUserInfo from '../../../hoook/useUpdateUserInfo'
import ManagePassword from './ManagePassword'

function ProfilePage({ auth, getUserStripeCustomer, stripeCustomer, updatePassword }) {
    usePageTitle('- Account Profile')
    const [loadUserStripeAccountDetails] = useLoadUserStripeAccountDetails(auth, stripeCustomer)
    const [handlePasswordUpdate, handleOnChangePassword, updatePasswordForm] = useUpdatePassword(
        auth,
        updatePassword,
    )
    const [handleOnChangeUserInfo, userInfoForm] = useUpdateUserInfo(auth)

    useEffect(() => {
        getUserStripeCustomer()
    }, [getUserStripeCustomer])

    return (
        <div className="container">
            {stripeCustomer.loading ? (
                <CustomLoader loaderMessage="Fetching user data." color="white" />
            ) : (
                <div className="row">
                    <AccountDetails
                        userInfoForm={userInfoForm}
                        handleOnChangeUserInfo={handleOnChangeUserInfo}
                    />
                    {stripeCustomer.customer.customerId !== '' && (
                        <BillingDetails
                            customer={stripeCustomer.customer}
                            loadUserStripeAccountDetails={loadUserStripeAccountDetails}
                        />
                    )}
                    <ManagePassword
                        auth={auth}
                        handleOnChangePassword={handleOnChangePassword}
                        handlePasswordUpdate={handlePasswordUpdate}
                        updatePasswordForm={updatePasswordForm}
                    />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    stripeCustomer: state.stripeCustomer,
})

const mapDispatchToProps = (dispatch) => ({
    getUserStripeCustomer: () => dispatch(getUserStripeCustomer()),
    updatePassword: (updatePasswordForm) => dispatch(updatePassword(updatePasswordForm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
