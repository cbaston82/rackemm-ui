import { FaGoogle } from 'react-icons/fa'
import Button from '../../Button'
import useCreateCalendarEvent from '../../../hoook/useCreateCalendarEvent'
import useSubscriptionHooks from '../../../hoook/useSubscriptionHooks'

function AddToCalendarButton({ stripeCustomer, event, auth }) {
    const { handleCreateCalendarEvent } = useCreateCalendarEvent()
    const { handleNoSubscriptionToast } = useSubscriptionHooks()

    return (
        <>
            {auth.user.email ? (
                <Button
                    className="btn btn-primary w-100 mt-3"
                    onClick={() => handleCreateCalendarEvent(event)}
                >
                    Add to calendar <FaGoogle />
                </Button>
            ) : (
                <Button
                    className="btn btn-primary w-100 mt-3"
                    onClick={() => handleNoSubscriptionToast(stripeCustomer)}
                >
                    Add to calendar <FaGoogle />
                </Button>
            )}
        </>
    )
}

export default AddToCalendarButton
