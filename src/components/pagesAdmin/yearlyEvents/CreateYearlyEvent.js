import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import YearlyEventForm from './YearlyEventForm'
import { useNavigate } from 'react-router-dom'
import { createYearlyEvent, getUserMedia } from '../../../redux'

function CreateYearlyEvent({ userYearlyEvents, createYearlyEvent, getUserMedia, userMedia }) {
    const initialFormValues = {
        type: 'yearly-event',
        bracket: '',
        title: '',
        description: '',
        pointOfContact: '',
        pointOfContactPhone: '',
        buyIn: '',
        startDate: new Date().toDateString(),
        endDate: new Date().toDateString(),
        startTime: '00:00',
        venue: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        ratingSystem: '',
        game: '',
        playerList: [],
        status: '',
        posterImage: '',
    }

    const [editEvent, setEditEvent] = useState(initialFormValues)
    const navigate = useNavigate()

    const handleFormValueChange = (e) => {
        const { name, value } = e.target

        setEditEvent({ ...editEvent, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        createYearlyEvent(editEvent)
    }

    useEffect(() => {
        if (userYearlyEvents.eventCreated) {
            navigate('/account/yearly-events')
        }
    }, [userYearlyEvents, navigate])

    return (
        <div className="container">
            <YearlyEventForm
                userMedia={userMedia}
                handleFormValueChange={handleFormValueChange}
                handleFormSubmit={handleFormSubmit}
                editEvent={editEvent}
                loading={userYearlyEvents.loading}
                pageRequest={'Create Yearly Event'}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    userYearlyEvents: state.userYearlyEvents,
    userMedia: state.userMedia,
})

const mapDispatchToProps = (dispatch) => ({
    createYearlyEvent: (editEvent) => dispatch(createYearlyEvent(editEvent)),
    getUserMedia: () => dispatch(getUserMedia()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateYearlyEvent)
