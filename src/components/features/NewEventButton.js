import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { canCreateWeeklyEvent } from '../../helpers/config'

function NewEventButton({ path, createdEventsCount, subscriptionPlanId }) {
    const canCreateMoreEvents = canCreateWeeklyEvent(subscriptionPlanId, createdEventsCount)

    if (canCreateMoreEvents) {
        return (
            <Link to={path}>
                <button className="btn btn-outline-secondary btn-sm">
                    New Event <FaPlus />
                </button>
            </Link>
        )
    }
}

export default NewEventButton
