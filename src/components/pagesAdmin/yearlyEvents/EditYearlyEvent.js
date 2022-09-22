import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import YearlyEventForm from './YearlyEventForm'
import { getUserMedia, updateUserYearlyEvent } from '../../../redux'
import NotFound404 from '../../pagesPublic/NotFound404'
import { formatPhoneNumber } from '../../../helpers'
import usePageTitle from '../../../hoook/usePageTitle'

function EditYearlyEvent({ userYearlyEvents, updateUserYearlyEvent, getUserMedia, userMedia }) {
    usePageTitle('- Account Yearly Event Edit')
    const { id } = useParams()
    const [editEvent, setEditEvent] = useState(null)
    const navigate = useNavigate()

    const handleFormValueChange = (e) => {
        const { name, value } = e.target
        setEditEvent({
            ...editEvent,
            [name]:
                name === 'pointOfContactPhone'
                    ? formatPhoneNumber(value)
                    : name === 'buyIn'
                    ? parseInt(value)
                    : value,
        })
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
