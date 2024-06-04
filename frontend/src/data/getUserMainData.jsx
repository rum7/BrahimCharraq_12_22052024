import { USER_MAIN_DATA } from '@/mockApi/mockApi'

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

function formatData(rawData) {
    const { userInfos, score, todayScore, keyData } = rawData.data
    const { calorieCount, carbohydrateCount, lipidCount, proteinCount } = keyData

    return {
        userInfos,
        todayScore: score || todayScore,
        keyData: [
            {
                name: 'calorie',
                displayName: 'calories',
                value: calorieCount,
                unit: 'kCal'
            },
            {
                name: 'protein',
                displayName: 'protéines',
                value: proteinCount,
                unit: 'g'
            },
            {
                name: 'carbs',
                displayName: 'glucides',
                value: carbohydrateCount,
                unit: 'g'
            },
            {
                name: 'lipid',
                displayName: 'lipides',
                value: lipidCount,
                unit: 'g'
            },
        ]
    }
}

export const getUserMainData = async (apiCheck, userId) => {
    const rawData = await fetchData(apiCheck, userId)
    const userMainData = formatData(rawData)
    return userMainData
}