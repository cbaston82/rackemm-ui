export const minDate = () => {
    let dtToday = new Date()
    let month = dtToday.getMonth() + 1
    let day = dtToday.getDate()
    let year = dtToday.getFullYear()
    if (month < 10) month = '0' + month.toString()
    if (day < 10) day = '0' + day.toString()

    return year + '-' + month + '-' + day
}

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
