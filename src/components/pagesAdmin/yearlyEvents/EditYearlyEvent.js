import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import YearlyEventForm from './YearlyEventForm'
import { getUserMedia, updateUserEvent } from '../../../redux'
import NotFound404 from '../../pagesPublic/NotFound404'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function EditYearlyEvent({ userEvents, updateUserEvent, userMedia }) {
    usePageTitle('- Account Yearly Event Edit')
    const { id } = useParams()
    const [editEvent, setEditEvent] = useState(null)
    const navigate = useNavigate()

    const handleFormValueChange = (e) => {
        const { name, value } = e.target
        setEditEvent({
            ...editEvent,
            [name]:
                name !== 'pointOfContactPhone'
                    ? name === 'buyIn'
                        ? parseInt(value, 10)
                        : value
                    : formatPhoneNumber(value),
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        updateUserEvent(editEvent)
    }

    useEffect(() => {
        setEditEvent(userEvents.events.filter((event) => event._id === id).pop())

        if (userEvents.eventUpdated) {
            navigate('/account/yearly-events')
        }
    }, [userEvents, id, navigate])

    return (
        <div className="container">
            {editEvent ? (
                <YearlyEventForm
                    userMedia={userMedia}
                    handleFormValueChange={handleFormValueChange}
                    handleFormSubmit={handleFormSubmit}
                    editEvent={editEvent}
                    pageRequest="Edit Event"
                />
            ) : (
                <NotFound404
                    message="Event does not exists "
                    buttonText="Back to yearly events"
                    redirectTo="account/yearly-events"
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userEvents: state.userEvents,
    userMedia: state.userMedia,
})

const mapDispatchToProps = (dispatch) => ({
    updateUserEvent: (event) => dispatch(updateUserEvent(event)),
    getUserMedia: () => dispatch(getUserMedia()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditYearlyEvent)
