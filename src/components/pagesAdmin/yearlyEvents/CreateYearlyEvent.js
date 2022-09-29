import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import YearlyEventForm from './YearlyEventForm'
import { createYearlyEvent, getUserMedia } from '../../../redux'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function CreateYearlyEvent({ userYearlyEvents, createYearlyEvent, userMedia }) {
    usePageTitle('- Account Yearly Event Create')

    const initialFormValues = {
        type: 'yearly-event',
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
        playerList: [],
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
                pageRequest="Create Yearly Event"
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
