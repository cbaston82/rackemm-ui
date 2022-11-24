import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import WeeklyEventForm from './WeeklyEventForm'
import { createUserEvent, getUserMedia } from '../../../redux'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function CreateWeeklyEvent({ userEvents, createUserEvent, getUserMedia, userMedia }) {
    usePageTitle('- Dashboard Weekly Event Create')
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

    let autocomplete = null

    const [editEvent, setEditEvent] = useState(initialFormValues)
    const navigate = useNavigate()

    const handlePlaceSelect = () => {
        const addressObject = autocomplete.getPlace()
        const address = addressObject.address_components
        console.log(`${address[0].long_name} ${address[1].long_name}`)
        console.log(addressObject)
        setEditEvent({
            ...editEvent,
            address:
                address.length === 9
                    ? `${address[1].long_name} ${address[2].long_name}`
                    : `${address[0].long_name} ${address[1].long_name}`,

            city: address.length === 9 ? `${address[3].long_name}` : `${address[2].long_name}`,
            state: address.length === 9 ? `${address[5].long_name}` : `${address[4].long_name}`,
            zipCode: address.length === 9 ? `${address[7].long_name}` : `${address[6].long_name}`,
            venue: addressObject.name,
        })
        console.log('ddddddddddd', editEvent)
    }

    useEffect(() => {
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            {},
        )

        autocomplete.addListener('place_changed', handlePlaceSelect)
    }, [autocomplete])

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
