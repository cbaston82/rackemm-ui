import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import WeeklyEventForm from './WeeklyEventForm'
import { getUserMedia, updateUserEvent } from '../../../redux'
import NotFound404 from '../../pagesPublic/NotFound404'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function EditWeeklyEvent({ userEvents, updateUserEvent, getUserMedia, userMedia }) {
    usePageTitle('- Account Weekly Event Edit')
    const { id } = useParams()
    const [editEvent, setEditEvent] = useState(null)
    const navigate = useNavigate()

    const handleFormValueChange = (e) => {
        const { name, value } = e.target
        setEditEvent({
            ...editEvent,
            [name]:
                name === 'pointOfContactPhone'
                    ? formatPhoneNumber(value)
                    : name === 'buyIn'
                    ? parseInt(value, 10)
                    : value,
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        updateUserEvent(editEvent)
    }

    useEffect(() => {
        getUserMedia()
    }, [getUserMedia])

    useEffect(() => {
        setEditEvent(userEvents.events.filter((event) => event._id === id).pop())

        if (userEvents.eventUpdated) {
            navigate('/account/weekly-events')
        }
    }, [userEvents, navigate, id])

    return (
        <div className="container">
            {editEvent ? (
                <WeeklyEventForm
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
                    redirectTo="account/weekly-events"
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

export default connect(mapStateToProps, mapDispatchToProps)(EditWeeklyEvent)
