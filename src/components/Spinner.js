import { MoonLoader } from 'react-spinners'

function Spinner() {
    return (
        <div className="d-flex justify-content-center align-content-center">
            <MoonLoader color="white" size={150} loading={true} />
        </div>
    )
}

export default Spinner
