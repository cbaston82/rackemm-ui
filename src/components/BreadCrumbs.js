import { Link } from 'react-router-dom'

function BreadCrumbs({ previousLinks, activeLink }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {previousLinks.map((link, index) => (
                    <li key={index} className="breadcrumb-item">
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
                <li className="breadcrumb-item active" aria-current="page">
                    {activeLink}
                </li>
            </ol>
        </nav>
    )
}

export default BreadCrumbs
