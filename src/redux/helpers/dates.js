export const daysInWeek = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
}

export const sortByDayInWeek = (data) => data.sort((a, b) => daysInWeek[a.day] - daysInWeek[b.day])

export const sortByDate = (data) =>
    data.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
