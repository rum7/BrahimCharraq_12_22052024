import { USER_ACTIVITY } from '@/mockApi/mockApi'

async function fetchData(apiCheck, userId) {
    if (apiCheck === 'api') {
        const res = await fetch(`http://localhost:3000/user/${userId}/activity`)
        return res.json()
    } else {
        let data = {}
        const res = USER_ACTIVITY.filter(data => data.userId === Number(userId))
        data.data = res[0]
        return data
    }
}

function formatData(rawData) {
    const { userId, sessions } = rawData.data

    return {
        userId: userId,
        sessions: sessions.map((sessionData) => (
            {
                day: new Date(sessionData.day).getDate(),
                kilogram: sessionData.kilogram,
                calories: sessionData.calories
            }
        ))
    }
}

export const getUserActivity = async (apiCheck, userId) => {
    const rawData = await fetchData(apiCheck, userId)
    const userActivity = formatData(rawData)
    return userActivity
}