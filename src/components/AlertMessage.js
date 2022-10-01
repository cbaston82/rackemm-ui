import { Link } from 'react-router-dom'

function AlertMessage({ className = '', message = '', link = '', path = '', linkText = '' }) {
    if (link) {
        return (
            <div className={className} role="alert">
                {message}{' '}
                <a href={link} target="_blank" rel="noreferrer">
                    {linkText}
                </a>
            </div>
        )
    }

    return (
        <div className={className} role="alert">
            {message} <Link to={path}>{linkText}</Link>
        </div>
    )
}

export default AlertMessage
