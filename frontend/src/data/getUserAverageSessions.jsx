import { USER_AVERAGE_SESSIONS } from '@/mockApi/mockApi'

async function fetchData(apiCheck, userId) {
    if (apiCheck === 'api') {
        const res = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
        return res.json()
    } else {
        let data = {}
        const res = USER_AVERAGE_SESSIONS.filter(data => data.userId === Number(userId))
        data.data = res[0]
        return data
    }
}

function formatData(rawData) {
    const { userId, sessions } = rawData.data

    const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    return {
        userId,
        sessions: sessions.map((sessionData) => (
            {
                day: weekday[sessionData.day - 1],
                sessionLength: sessionData.sessionLength,
            }
        ))
    }
}

export const getUserAverageSessions = async (apiCheck, userId) => {
    const rawData = await fetchData(apiCheck, userId)
    const userAverageSessions = formatData(rawData)
    return userAverageSessions
}