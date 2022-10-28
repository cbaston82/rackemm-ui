import { Navigate } from 'react-router-dom'

function LoggedIn({ auth, children }) {
    if (auth.user.email) {
        return <Navigate path="*" to="/account" replace />
    }

    return children
}
export default LoggedIn
