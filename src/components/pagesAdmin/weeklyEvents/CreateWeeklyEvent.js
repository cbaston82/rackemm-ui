import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import WeeklyEventForm from './WeeklyEventForm'
import { createWeeklyEvent, getUserMedia } from '../../../redux'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function CreateWeeklyEvent({ userWeeklyEvents, createWeeklyEvent, getUserMedia, userMedia }) {
    usePageTitle('- Account Weekly Event Create')
    const initialFormValues = {
        type: 'weekly',
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
        posterImage: '',
        status: '',
    }

    const [editEvent, setEditEvent] = useState(initialFormValues)
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

    const handleFormSubmit = (e) => {
        e.preventDefault()

        createWeeklyEvent(editEvent)
    }

    useEffect(() => {
        getUserMedia()
    }, [getUserMedia])

    useEffect(() => {
        if (userWeeklyEvents.eventCreated) {
            navigate('/account/weekly-events')
        }
    }, [userWeeklyEvents, navigate])

    return (
        <div className="container">
            <WeeklyEventForm
                userMedia={userMedia}
                handleFormValueChange={handleFormValueChange}
                handleFormSubmit={handleFormSubmit}
                editEvent={editEvent}
                loading={userWeeklyEvents.loading}
                pageRequest="Create Weekly Event"
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    userWeeklyEvents: state.userWeeklyEvents,
    userMedia: state.userMedia,
})

const mapDispatchToProps = (dispatch) => ({
    createWeeklyEvent: (editEvent) => dispatch(createWeeklyEvent(editEvent)),
    getUserMedia: () => dispatch(getUserMedia()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWeeklyEvent)
