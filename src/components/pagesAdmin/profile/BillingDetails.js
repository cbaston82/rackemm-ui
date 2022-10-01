function BillingDetails({ customer, loadUserStripeAccountDetails }) {
    return (
        <div className="col-xl-12">
            <div className="card rounded-0">
                <div className="card-header">Billing Details</div>
                <div className="card-body">
                    <form onSubmit={loadUserStripeAccountDetails}>
                        <input
                            type="hidden"
                            id="customer-id"
                            name="customer_id"
                            value={customer.customerId}
                        />
                        <button
                            className="btn btn-outline-secondary text-black-50 mb-3"
                            id="checkout-and-portal-button"
                            type="submit"
                        >
                            Manage
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BillingDetails
