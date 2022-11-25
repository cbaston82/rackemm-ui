import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import YearlyEventForm from './YearlyEventForm'
import { getUserMedia, updateUserEvent } from '../../../redux'
import NotFound404 from '../../pagesPublic/NotFound404'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function EditYearlyEvent({ userEvents, updateUserEvent, userMedia }) {
    usePageTitle('- Dashboard Yearly Event Edit')
    const { id } = useParams()
    let autocomplete = null
    const [editEvent, setEditEvent] = useState(null)
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
        setTimeout(() => {
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById('autocomplete'),
                {},
            )

            autocomplete.addListener('place_changed', handlePlaceSelect)
        }, 500)
    }, [autocomplete])

    const handleFormValueChange = (e) => {
        const { name, value } = e.target
        setEditEvent({
            ...editEvent,
            [name]:
                name !== 'pointOfContactPhone'
                    ? name === 'buyIn'
                        ? parseInt(value, 10)
                        : value
                    : formatPhoneNumber(value),
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        updateUserEvent(editEvent)
    }

    useEffect(() => {
        setEditEvent(userEvents.events.filter((event) => event._id === id).pop())

        if (userEvents.eventUpdated) {
            navigate('/account/yearly-events')
        }
    }, [userEvents, id, navigate])

    return (
        <div className="container">
            {editEvent ? (
                <YearlyEventForm
                    userMedia={userMedia}
                    handleFormValueChange={handleFormValueChange}
                    handleFormSubmit={handleFormSubmit}
                    editEvent={editEvent}
                    pageRequest="Edit Event"
                />
            ) : (
                <NotFound404
                    message="Event does not exists "
                    buttonText="Back to yearly events"
                    redirectTo="account/yearly-events"
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userEvents: state.userEvents,
    userMedia: state.userMedia,
})

const mapDispatchToProps = (dispatch) => ({
    updateUserEvent: (event) => dispatch(updateUserEvent(event)),
    getUserMedia: () => dispatch(getUserMedia()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditYearlyEvent)
