import { MoonLoader } from 'react-spinners'

function Spinner({ color }) {
    return (
        <div className="d-flex justify-content-center align-content-center">
            <MoonLoader color={color} size={150} loading={true} />
        </div>
    )
}

export default Spinner
