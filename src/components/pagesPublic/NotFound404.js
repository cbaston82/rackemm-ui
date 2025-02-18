import { Link } from 'react-router-dom'
import usePageTitle from '../../hoook/usePageTitle'

function NotFound404({ message, redirectTo, buttonText }) {
    usePageTitle('- 404 Not Found')
    return (
        <div className="row justify-content-center">
            <div className="col-md-12 col-sm-12">
                <div
                    className="card shadow-lg border-0 rounded-lg mt-5 mx-auto"
                    style={{ width: '30rem' }}
                >
                    <h3 className="card-header display-1 text-black-50 fw-bold text-center">404</h3>

                    <span className="card-subtitle mb-2 mt-2 text-muted text-center">
                        {message}
                    </span>

                    <div className="card-body mx-auto">
                        <Link
                            type="button"
                            to={`/${redirectTo}`}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            {' '}
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound404
