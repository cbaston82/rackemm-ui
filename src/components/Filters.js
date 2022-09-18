import { FaSave, FaFilter } from 'react-icons/fa'

function Filters({ filters, type, buttonTitle }) {
    return (
        <>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <FaFilter /> {buttonTitle}
                </button>
                <ul className="dropdown-menu">
                    {filters.map(
                        (filter) =>
                            filter.type === type && (
                                <li>
                                    <a className="dropdown-item" href={filter.url}>
                                        {filter.description}
                                    </a>
                                </li>
                            ),
                    )}
                    <hr />
                    <li>
                        <a
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            href="#"
                        >
                            <FaSave /> Save current filter
                        </a>
                    </li>
                </ul>
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <FaFilter /> Save filter
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filters
