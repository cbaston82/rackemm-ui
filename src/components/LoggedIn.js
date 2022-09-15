import { Navigate } from 'react-router-dom'

const LoggedIn = ({ auth, children }) => {
    if (auth.user.email) {
        return <Navigate path="*" to="/account/profile" replace />
    }

    return children
}
export default LoggedIn
