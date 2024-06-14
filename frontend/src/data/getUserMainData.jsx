import { USER_MAIN_DATA } from '@/mockApi/mockApi'

/**
 * Retrieves the user's main data
 * Fetches from api or mock api depending of apiCheck value
 * @function fetchData
 * @param {string} apiCheck 
 * @param {string} userId
 * @returns {object}
 */
async function fetchData(apiCheck, userId) {
    if (apiCheck === 'api') {
        const res = await fetch(`http://localhost:3000/user/${userId}`)
        return res.json()
    } else {
        let data = {}
        const res = USER_MAIN_DATA.filter(data => data.id === Number(userId))
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
    const { userInfos, score, todayScore, keyData } = rawData.data
    const { calorieCount, carbohydrateCount, lipidCount, proteinCount } = keyData

    return {
        userInfos,
        todayScore: score || todayScore,
        keyData: [
            {
                name: 'calorie',
                displayName: 'Calories',
                value: calorieCount.toLocaleString('en-US'),
                unit: 'kCal'
            },
            {
                name: 'protein',
                displayName: 'Protéines',
                value: proteinCount,
                unit: 'g'
            },
            {
                name: 'carbs',
                displayName: 'Glucides',
                value: carbohydrateCount,
                unit: 'g'
            },
            {
                name: 'lipid',
                displayName: 'Lipides',
                value: lipidCount,
                unit: 'g'
            },
        ]
    }
}


/**
 * Fetching and formatting before returning data
 * @function getUserMainData
 * @param {string} apiCheck 
 * @param {string} userId
 * @returns {object}
 */
export const getUserMainData = async (apiCheck, userId) => {
    const rawData = await fetchData(apiCheck, userId)
    const userMainData = formatData(rawData)
    return userMainData
}