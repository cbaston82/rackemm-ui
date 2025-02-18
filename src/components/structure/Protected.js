import { Navigate } from 'react-router-dom'

function Protected({ auth, children }) {
    if (!auth.token) {
        return <Navigate path="*" to="/" replace />
    }

    return children
}
export default Protected
