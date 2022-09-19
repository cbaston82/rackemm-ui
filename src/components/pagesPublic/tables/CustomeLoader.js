import Spinner from '../../Spinner'

function CustomLoader({ color, loaderMessage }) {
    return (
        <div
            className="d-flex flex-column justify-content-center align-content-center"
            style={{ padding: '24px' }}
        >
            <Spinner color={color} />
            <div className="mt-4 text-center">{loaderMessage}</div>
        </div>
    )
}

export default CustomLoader
