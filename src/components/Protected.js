import { Navigate } from 'react-router-dom'

const Protected = ({ auth, children }) => {
    if (!auth.user.email) {
        return <Navigate path="*" to="/" replace />
    }

    return children
}
export default Protected
