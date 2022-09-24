import { Link } from 'react-router-dom'

function AlertMessageWithLinkEnd({ message, path, linkText }) {
    return (
        <div className="alert alert-info mt-3" role="alert">
            {message} <Link to={path}>{linkText}</Link>
        </div>
    )
}

export default AlertMessageWithLinkEnd
