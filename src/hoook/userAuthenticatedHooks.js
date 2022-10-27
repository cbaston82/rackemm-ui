import { toast } from 'react-toastify'
import { userIsLoggedIn } from '../helpers/config'

function userAuthenticatedHooks() {
    const handleNotAuthenticatedToast = (auth) => {
        if (!userIsLoggedIn(auth)) {
            return toast.info('You must be signed in!')
        }
    }

    return { handleNotAuthenticatedToast }
}

export default userAuthenticatedHooks
