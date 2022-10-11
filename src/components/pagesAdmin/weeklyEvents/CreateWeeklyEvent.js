import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import WeeklyEventForm from './WeeklyEventForm'
import { createUserEvent, getUserMedia } from '../../../redux'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function CreateWeeklyEvent({ userEvents, createUserEvent, getUserMedia, userMedia }) {
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

        createUserEvent(editEvent)
    }

    useEffect(() => {
        getUserMedia()
    }, [getUserMedia])

    useEffect(() => {
        if (userEvents.eventCreated) {
            navigate('/account/weekly-events')
        }
    }, [userEvents, navigate])

    return (
        <div className="container">
            <WeeklyEventForm
                userMedia={userMedia}
                handleFormValueChange={handleFormValueChange}
                handleFormSubmit={handleFormSubmit}
                editEvent={editEvent}
                loading={userEvents.loading}
                pageRequest="Create Weekly Event"
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    userEvents: state.userEvents,
    userMedia: state.userMedia,
})

const mapDispatchToProps = (dispatch) => ({
    createUserEvent: (editEvent) => dispatch(createUserEvent(editEvent)),
    getUserMedia: () => dispatch(getUserMedia()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWeeklyEvent)
