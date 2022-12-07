import { FaSkull } from 'react-icons/fa'

function DeleteAccount() {
    return (
        <div className="col-xl-12 mt-4">
            <div className="card rounded-0">
                <div className="card-header text-danger">
                    Delete Account <FaSkull />
                </div>
                <div className="card-body">
                    <form>
                        <input type="hidden" id="customer-id" name="customer_id" value="" />
                        <button
                            className="btn btn-danger mb-3"
                            id="checkout-and-portal-button"
                            type="submit"
                        >
                            Delete account
                        </button>
                        <div className="alert alert-info" role="alert">
                            This will permanently remove the customer’s billing information and
                            immediately cancel any current subscriptions. Past payments or invoices
                            associated with the customer will still remain. This action cannot be
                            undone.
                        </div>
                        <hr />
                        <p>
                            This feature to delete your account is currently in progress. If you
                            need to delete your account immediately please contact us at{' '}
                            <a href="mailto:support@rackemm.com">support@rackemm.com</a>. <br />
                            For more details about this feature{' '}
                            <a href="https://github.com/cbaston82/rackemm-public/issues/9">
                                View Ticket
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccount
