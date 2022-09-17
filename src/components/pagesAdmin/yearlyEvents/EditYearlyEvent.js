import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import YearlyEventForm from './YearlyEventForm'
import { getUserMedia, updateUserYearlyEvent } from '../../../redux'
import NotFound404 from '../../pages/NotFound404'

function EditYearlyEvent({ userYearlyEvents, updateUserYearlyEvent, getUserMedia, userMedia }) {
    const { id } = useParams()
    const [editEvent, setEditEvent] = useState(null)
    const navigate = useNavigate()

    const handleFormValueChange = (e) => {
        const { name, value } = e.target
        setEditEvent({ ...editEvent, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        updateUserYearlyEvent(editEvent)
    }

    useEffect(() => {
        setEditEvent(userYearlyEvents.events.filter((event) => event._id === id).pop())

        if (userYearlyEvents.eventUpdated) {
            navigate('/account/yearly-events')
        }
    }, [userYearlyEvents, id, navigate])

    return (
        <div className="container">
            {editEvent ? (
                <YearlyEventForm
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
                    redirectTo={'account/yearly-events'}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userYearlyEvents: state.userYearlyEvents,
    userMedia: state.userMedia,
})

const mapDispatchToProps = (dispatch) => ({
    updateUserYearlyEvent: (event) => dispatch(updateUserYearlyEvent(event)),
    getUserMedia: () => dispatch(getUserMedia()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditYearlyEvent)
