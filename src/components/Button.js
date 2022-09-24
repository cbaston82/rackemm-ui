import { Link } from 'react-router-dom'

function Button({
    path = '',
    className = '',
    buttonText = '',
    children = null,
    disabled = false,
    onClick,
}) {
    if (disabled) {
        return (
            <button onClick={onClick} className={className}>
                {buttonText} {children}
            </button>
        )
    }

    return (
        <Link to={path}>
            <button disabled={disabled} onClick={onClick && onClick} className={className}>
                {buttonText} {children}
            </button>
        </Link>
    )
}

export default Button
