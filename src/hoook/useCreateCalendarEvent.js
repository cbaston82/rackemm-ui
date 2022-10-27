import { gapi } from 'gapi-script'
import { secondsToMilliseconds } from 'date-fns'

function useCreateCalendarEvent() {
    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
    const DISCOVERY_DOCS = [`${process.env.REACT_APP_DISCOVERY_DOCS}`]
    const SCOPES = process.env.REACT_APP_SCOPES

    const handleCreateCalendarEvent = (event) => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            // eslint-disable-next-line no-console
            gapi.client.load('calendar', 'v3', () => console.log('bam!'))

            gapi.auth2
                .getAuthInstance()
                .signIn()
                .then(() => {
                    const calendarEvent = {
                        summary: event.title,
                        location: `${event.address}, ${event.city}, ${event.state} ${event.zipCode}`,
                        description: event.description,
                        start: {
                            dateTime: new Date(secondsToMilliseconds(event.startTime)),
                            timeZone: 'America/Los_Angeles',
                        },
                        end: {
                            dateTime: new Date(secondsToMilliseconds(event.endTime)),
                            timeZone: 'America/Los_Angeles',
                        },
                        recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
                        attendees: [],
                        reminders: {
                            useDefault: false,
                            overrides: [
                                { method: 'email', minutes: 24 * 60 },
                                { method: 'popup', minutes: 10 },
                            ],
                        },
                    }

                    const request = gapi.client.calendar.events.insert({
                        calendarId: 'primary',
                        resource: calendarEvent,
                    })

                    request.execute((calendarEvent) => {
                        // eslint-disable-next-line no-undef
                        window.open(calendarEvent.htmlLink)
                    })
                })
        })
    }

    return [handleCreateCalendarEvent]
}

export default useCreateCalendarEvent
