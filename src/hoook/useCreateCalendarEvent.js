import { gapi } from 'gapi-script'

function useCreateCalendarEvent() {
    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
    const DISCOVERY_DOCS = [`${process.env.REACT_APP_DISCOVERY_DOCS}`]
    const SCOPES = process.env.REACT_APP_SCOPES

    const handleCreateCalendarEvent = (allYearlyEvents) => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('bam!'))

            gapi.auth2
                .getAuthInstance()
                .signIn()
                .then(() => {
                    const event = {
                        summary: allYearlyEvents.event.title,
                        location: `${allYearlyEvents.event.address}, ${allYearlyEvents.event.city}, ${allYearlyEvents.event.state} ${allYearlyEvents.event.zipCode}`,
                        description: allYearlyEvents.event.description,
                        start: {
                            dateTime: allYearlyEvents.event.startTime,
                            timeZone: 'America/Los_Angeles',
                        },
                        end: {
                            dateTime: allYearlyEvents.event.endTime,
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
                        resource: event,
                    })

                    request.execute((event) => {
                        console.log(event)
                        window.open(event.htmlLink)
                    })
                })
        })
    }

    return [handleCreateCalendarEvent]
}

export default useCreateCalendarEvent
