import { FaTrashAlt } from 'react-icons/fa'

function FiltersTable({ filters, handleDelete }) {
    return (
        <table className="table table-dark mt-3">
            <thead>
                <tr>
                    <th>description</th>
                    <th>type</th>
                    <th>url</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {filters &&
                    filters.map((filter) => (
                        <tr key={filter._id}>
                            <td className="text-white-50">{filter.description}</td>
                            <td className="text-white-50">{filter.type}</td>
                            <td className="text-white-50">{filter.url}</td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <div className="ms-3">
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(filter._id)}
                                            className="btn btn-outline-danger btn-sm"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}
export default FiltersTable
