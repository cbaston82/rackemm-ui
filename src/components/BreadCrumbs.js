import { useNavigate, Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

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
                        <li key={link.name} className="breadcrumb-item">
                            <Link to={link.path}>
                                <FaArrowAltCircleLeft size={20} color="cyan" />
                            </Link>
                        </li>
                    ))
                ) : (
                    <>
                        {navigateToPreviousLink && (
                            <li className="breadcrumb-item">
                                <button
                                    type="button"
                                    className="btn btn-link p-0"
                                    onClick={() => navigate(-1)}
                                >
                                    <FaArrowAltCircleLeft size={20} color="cyan" />
                                </button>
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
