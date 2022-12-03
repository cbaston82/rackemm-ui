import { Navigate } from 'react-router-dom'

function LoggedIn({ auth, children }) {
    if (auth.token) {
        return <Navigate path="*" to="/" replace />
    }

    return children
}
export default LoggedIn
