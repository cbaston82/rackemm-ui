export const cleanFileName = (string) => {
    return string.replace(/[!@#$%^&*()?><,./\\+ -]/g, '_')
}

export const allowedFileTypeUploads = () => ['image/jpeg', 'image/png', 'image/jpg']

export const cleanPublicImageName = (publicId) => {
    return publicId.split('/')[1].split('-')[0]
}

export const formatPhoneNumber = (value) => {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value

    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '')

    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length

    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early

    if (phoneNumberLength < 4) return phoneNumber

    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }

    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
}

export const formatTimeForWeeklyEvent = (time) => {
    const militaryTo24 = [
        {
            military: '00',
            nonMilitary: '12',
        },
        {
            military: '01',
            nonMilitary: '1',
        },
        {
            military: '02',
            nonMilitary: '2',
        },
        {
            military: '03',
            nonMilitary: '3',
        },
        {
            military: '04',
            nonMilitary: '4',
        },
        {
            military: '05',
            nonMilitary: '5',
        },
        {
            military: '06',
            nonMilitary: '6',
        },
        {
            military: '07',
            nonMilitary: '7',
        },
        {
            military: '08',
            nonMilitary: '8',
        },
        {
            military: '09',
            nonMilitary: '9',
        },
        {
            military: '10',
            nonMilitary: '10',
        },
        {
            military: '11',
            nonMilitary: '11',
        },
        {
            military: '12',
            nonMilitary: '12',
        },
        {
            military: '13',
            nonMilitary: '1',
        },
        {
            military: '14',
            nonMilitary: '2',
        },
        {
            military: '15',
            nonMilitary: '3',
        },
        {
            military: '16',
            nonMilitary: '4',
        },
        {
            military: '17',
            nonMilitary: '5',
        },
        {
            military: '18',
            nonMilitary: '6',
        },
        {
            military: '19',
            nonMilitary: '7',
        },
        {
            military: '20',
            nonMilitary: '8',
        },
        {
            military: '21',
            nonMilitary: '9',
        },
        {
            military: '22',
            nonMilitary: '10',
        },
        {
            military: '23',
            nonMilitary: '11',
        },
        {
            military: '24',
            nonMilitary: '12',
        },
    ]
    let hours = time.split(':')[0]
    let minutes = time.split(':')[1]
    let timeOfDay = hours <= 11 || hours === '24' ? 'AM' : 'PM'

    let cleanHour = militaryTo24.filter((ch) => ch.military === hours).pop().nonMilitary

    return `${cleanHour}:${minutes} ${timeOfDay}`
}

export const getApiUrl = () => {
    return '/api/v1/'
}
