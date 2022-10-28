import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import YearlyEventForm from './YearlyEventForm'
import { createUserEvent, getUserMedia } from '../../../redux'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function CreateYearlyEvent({ userEvents, createUserEvent, userMedia }) {
    usePageTitle('- Dashboard Yearly Event Create')

    const initialFormValues = {
        type: 'yearly',
        bracket: '',
        title: '',
        description: '',
        pointOfContact: '',
        pointOfContactPhone: '',
        buyIn: '',
        startTime: '',
        endTime: '',
        venue: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        ratingSystem: '',
        game: '',
        status: '',
        posterImage: '',
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

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        createUserEvent(editEvent)
    }

    useEffect(() => {
        if (userEvents.eventCreated) {
            navigate('/account/yearly-events')
        }
    }, [userEvents, navigate])

    return (
        <div className="container">
            <YearlyEventForm
                userMedia={userMedia}
                handleFormValueChange={handleFormValueChange}
                handleFormSubmit={handleFormSubmit}
                editEvent={editEvent}
                loading={userEvents.loading}
                pageRequest="Create Yearly Event"
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateYearlyEvent)
