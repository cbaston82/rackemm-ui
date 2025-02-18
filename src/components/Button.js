import { Link } from 'react-router-dom'

function Button({
    link = '',
    path = '',
    className = '',
    buttonText = '',
    children = null,
    disabled = false,
    onClick,
}) {
    if (disabled) {
        return (
            <button type="button" onClick={onClick} className={className}>
                {buttonText} {children}
            </button>
        )
    }

    if (link) {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                <button
                    type="button"
                    disabled={disabled}
                    onClick={onClick && onClick}
                    className={className}
                >
                    {buttonText} {children}
                </button>
            </a>
        )
    }

    return (
        <Link to={path}>
            <button
                type="button"
                disabled={disabled}
                onClick={onClick && onClick}
                className={className}
            >
                {buttonText} {children}
            </button>
        </Link>
    )
}

export default Button
