import { USER_ACTIVITY } from '@/mockApi/mockApi'

/**
 * Retrieves the user's activity data
 * Fetches from api or mock api depending of apiCheck value
 * @function fetchData
 * @param {string} apiCheck 
 * @param {string} userId
 * @returns {object}
 */
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


/**
 * Formats data
 * @function formatData
 * @param {object} rawData 
 * @returns {object}
 */
function formatData(rawData) {
    const { userId, sessions } = rawData.data

    return {
        userId,
        sessions: sessions.map((sessionData) => (
            {
                day: new Date(sessionData.day).getDate(),
                kilogram: sessionData.kilogram,
                calories: sessionData.calories
            }
        ))
    }
}


/**
 * Fetching and formatting before returning data
 * @function getUserActivity
 * @param {string} apiCheck 
 * @param {string} userId
 * @returns {object}
 */
export const getUserActivity = async (apiCheck, userId) => {
    const rawData = await fetchData(apiCheck, userId)
    const userActivity = formatData(rawData)
    return userActivity
}