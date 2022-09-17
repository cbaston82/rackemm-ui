import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import WeeklyEventForm from './WeeklyEventForm'
import { getUserMedia, updateUserWeeklyEvent } from '../../../redux'
import NotFound404 from '../../pagesPublic/NotFound404'

function EditWeeklyEvent({ userWeeklyEvents, updateUserWeeklyEvent, getUserMedia, userMedia }) {
    const { id } = useParams()
    const [editEvent, setEditEvent] = useState(null)
    const navigate = useNavigate()

    const handleFormValueChange = (e) => {
        const { name, value } = e.target
        setEditEvent({ ...editEvent, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        updateUserWeeklyEvent(editEvent)
    }

    useEffect(() => {
        getUserMedia()
    }, [getUserMedia])

    useEffect(() => {
        setEditEvent(userWeeklyEvents.events.filter((event) => event._id === id).pop())

        if (userWeeklyEvents.eventUpdated) {
            navigate('/account/weekly-events')
        }
    }, [userWeeklyEvents, navigate, id])

    return (
        <div className="container">
            {editEvent ? (
                <WeeklyEventForm
                    userMedia={userMedia}
                    handleFormValueChange={handleFormValueChange}
                    handleFormSubmit={handleFormSubmit}
                    editEvent={editEvent}
                    pageRequest={'Edit Event'}
                />
            ) : (
                <NotFound404
                    message="Event does not exists "
                    buttonText={'Back to yearly events'}
                    redirectTo={'account/weekly-events'}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userWeeklyEvents: state.userWeeklyEvents,
    userMedia: state.userMedia,
})

const mapDispatchToProps = (dispatch) => ({
    updateUserWeeklyEvent: (event) => dispatch(updateUserWeeklyEvent(event)),
    getUserMedia: () => dispatch(getUserMedia()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditWeeklyEvent)
