import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SpecialEventForm from './SpecialEventForm'
import { createUserEvent, getUserMedia } from '../../../redux'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function CreateSpecialEvent({ userEvents, createUserEvent, userMedia }) {
    usePageTitle('- Dashboard Special Event Create')

    const initialFormValues = {
        type: 'special',
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
        phoneNumber: '',
        ratingSystem: '',
        game: '',
        status: '',
        posterImage: '',
    }

    let autocomplete = null

    const [editEvent, setEditEvent] = useState(initialFormValues)
    const navigate = useNavigate()

    const handlePlaceSelect = () => {
        const addressObject = autocomplete.getPlace()
        const address = addressObject.address_components
        setEditEvent((prevState) => ({
            ...prevState,
            address:
                address.length === 9
                    ? `${address[1].long_name} ${address[2].long_name}`
                    : `${address[0].long_name} ${address[1].long_name}`,

            city: address.length === 9 ? `${address[3].long_name}` : `${address[2].long_name}`,
            state: address.length === 9 ? `${address[5].long_name}` : `${address[4].long_name}`,
            zipCode: address.length === 9 ? `${address[7].long_name}` : `${address[6].long_name}`,
            venue: addressObject.name,
            phoneNumber: addressObject.formatted_phone_number,
        }))
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

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        createUserEvent(editEvent)
    }

    useEffect(() => {
        if (userEvents.eventCreated) {
            navigate('/account/special-events')
        }
    }, [userEvents, navigate])

    return (
        <div className="container">
            <SpecialEventForm
                userMedia={userMedia}
                handleFormValueChange={handleFormValueChange}
                handleFormSubmit={handleFormSubmit}
                editEvent={editEvent}
                loading={userEvents.loading}
                pageRequest="Create Special Event"
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpecialEvent)
