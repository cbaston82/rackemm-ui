import { toast } from 'react-toastify'

function useNoSubscriptionToast() {
    const handleNoSubscriptionToast = (e) => {
        toast.info('Feature not available. Consider subscribing or updating your plan.')
    }
    return [handleNoSubscriptionToast]
}

export default useNoSubscriptionToast
