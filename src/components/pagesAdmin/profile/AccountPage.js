import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getUserStripeCustomer, logoutUser, updatePassword, updateUserInfo } from '../../../redux'
import CustomLoader from '../../CustomeLoader'
import usePageTitle from '../../../hoook/usePageTitle'
import AccountDetails from './AccountDetails'
import BillingDetails from './BillingDetails'
import useLoadUserStripeAccountDetails from '../../../hoook/useLoadUserStripeAccountDetails'
import useUpdatePassword from '../../../hoook/useUpdatePassword'
import useUpdateUserInfo from '../../../hoook/useUpdateUserInfo'
import useDeleteAccount from '../../../hoook/useDeleteAccount'
import ManagePassword from './ManagePassword'
import { userHasSubscription } from '../../../helpers/config'
import SideMenu from '../../structure/SideMenu'
import DeleteAccount from './DeleteAccount'

function AccountPage({
    auth,
    getUserStripeCustomer,
    stripeCustomer,
    updatePassword,
    updateUserInfo,
    userInfo,
    logoutUser,
}) {
    usePageTitle('- Account')
    const { loadUserStripeAccountDetails } = useLoadUserStripeAccountDetails(auth, stripeCustomer)
    const { handlePasswordUpdate, handleOnChangePassword, updatePasswordForm } = useUpdatePassword(
        auth,
        updatePassword,
    )
    const { handleOnChangeUserInfo, userInfoForm, handleUserInfoUpdate } = useUpdateUserInfo(
        updateUserInfo,
        userInfo,
    )

    const { handleDeleteAccount, loading, deleteAccountForm, handleOnChangeDeleteAccount } =
        useDeleteAccount(auth, logoutUser)

    useEffect(() => {
        getUserStripeCustomer()
    }, [getUserStripeCustomer])

    const location = useLocation()

    return (
        <div className="container">
            <SideMenu
                className="mt-5"
                userIsSubscribed={userHasSubscription(stripeCustomer)}
                location={location.pathname}
            />

            {stripeCustomer.loading || userInfo.loading ? (
                <CustomLoader loaderMessage="Fetching user data." color="white" />
            ) : (
                <div className="row">
                    <AccountDetails
                        userInfo={userInfo}
                        userInfoForm={userInfoForm}
                        handleUserInfoUpdate={handleUserInfoUpdate}
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
                    <DeleteAccount
                        deleteAccountForm={deleteAccountForm}
                        handleOnChangeDeleteAccount={handleOnChangeDeleteAccount}
                        handleDeleteAccount={handleDeleteAccount}
                        loading={loading}
                    />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    stripeCustomer: state.stripeCustomer,
    userInfo: state.userInfo,
})

const mapDispatchToProps = (dispatch) => ({
    getUserStripeCustomer: () => dispatch(getUserStripeCustomer()),
    updatePassword: (updatePasswordForm) => dispatch(updatePassword(updatePasswordForm)),
    updateUserInfo: (userInfo) => dispatch(updateUserInfo(userInfo)),
    logoutUser: () => dispatch(logoutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
