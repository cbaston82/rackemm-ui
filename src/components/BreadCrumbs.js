import { useNavigate, Link } from 'react-router-dom'

function BreadCrumbs({
    previousLinks = [],
    activeBreadcrumbTitle,
    navigateToPreviousLink = false,
}) {
    const navigate = useNavigate()

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {previousLinks.length > 0 ? (
                    previousLinks.map((link) => (
                        <li className="breadcrumb-item">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))
                ) : (
                    <>
                        {navigateToPreviousLink && (
                            <li className="breadcrumb-item">
                                <a href="#" onClick={() => navigate(-1)}>
                                    Back
                                </a>
                            </li>
                        )}
                    </>
                )}
                <li className="breadcrumb-item active" aria-current="page">
                    {activeBreadcrumbTitle}
                </li>
            </ol>
        </nav>
    )
}

export default BreadCrumbs
