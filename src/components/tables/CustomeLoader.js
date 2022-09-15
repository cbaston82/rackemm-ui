import Spinner from '../Spinner'

function CustomLoader({ loaderMessage }) {
    return (
        <div
            className="d-flex flex-column justify-content-center align-content-center"
            style={{ padding: '24px' }}
        >
            <Spinner />
            <div className="mt-4">{loaderMessage}</div>
        </div>
    )
}

export default CustomLoader
