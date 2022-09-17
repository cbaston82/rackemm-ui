import { Link } from 'react-router-dom'

function AlertMessageWithLinkEnd({ message, path }) {
    return (
        <div className="alert alert-info mt-3" role="alert">
            {message} <Link to={path}>Create</Link>
        </div>
    )
}

export default AlertMessageWithLinkEnd
