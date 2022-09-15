import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import WeeklyEventForm from './WeeklyEventForm'
import { useNavigate } from 'react-router-dom'
import { createWeeklyEvent } from '../../../redux'

function CreateWeeklyEvent({ userWeeklyEvents, createWeeklyEvent }) {
    const initialFormValues = {
        type: 'weekly-event',
        title: '',
        description: '',
        pointOfContact: '',
        pointOfContactPhone: '',
        buyIn: '',
        day: '',
        startTime: '00:00',
        venue: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        ratingSystem: '',
        game: '',
        status: '',
    }

    const [editEvent, setEditEvent] = useState(initialFormValues)
    const navigate = useNavigate()

    const handleFormValueChange = (e) => {
        const { name, value } = e.target

        setEditEvent({ ...editEvent, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        createWeeklyEvent(editEvent)
    }

    useEffect(() => {
        if (userWeeklyEvents.eventCreated) {
            navigate('/account/weekly-events')
        }
    }, [userWeeklyEvents, navigate])

    return (
        <div className="container">
            <WeeklyEventForm
                handleFormValueChange={handleFormValueChange}
                handleFormSubmit={handleFormSubmit}
                editEvent={editEvent}
                loading={userWeeklyEvents.loading}
                pageRequest={'Create Weekly Event'}
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    userWeeklyEvents: state.userWeeklyEvents,
})

const mapDispatchToProps = (dispatch) => ({
    createWeeklyEvent: (editEvent) => dispatch(createWeeklyEvent(editEvent)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWeeklyEvent)
