import { FaGoogle } from 'react-icons/fa'
import { userHasValidSubscription } from '../../../helpers/config'
import Button from '../../Button'
import useCreateCalendarEvent from '../../../hoook/useCreateCalendarEvent'

function AddToCalendarButton({ stripeCustomer, event }) {
    const [handleCreateCalendarEvent] = useCreateCalendarEvent()

    if (userHasValidSubscription(stripeCustomer)) {
        return (
            <Button
                className="btn btn-primary w-100 mt-3"
                onClick={() => handleCreateCalendarEvent(event)}
            >
                Add to calendar <FaGoogle />
            </Button>
        )
    }
}

export default AddToCalendarButton
