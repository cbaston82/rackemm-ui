import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

function NewEventButton({ path }) {
    return (
        <Link to={path}>
            <button className="btn btn-outline-secondary btn-sm">
                New Event <FaPlus />
            </button>
        </Link>
    )
}

export default NewEventButton
