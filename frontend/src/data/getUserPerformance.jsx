import { USER_PERFORMANCE } from '@/mockApi/mockApi'

async function fetchData(apiCheck, userId) {
    if (apiCheck === 'api') {
        const res = await fetch(`http://localhost:3000/user/${userId}/performance`)
        return res.json()
    } else {
        let data = {}
        const res = USER_PERFORMANCE.filter(data => data.userId === Number(userId))
        data.data = res[0]
        return data
    }
}

function formatData(rawData) {
    const { userId, kind, data } = rawData.data

    const subjectData = [
        {
            "1": "intensity",
            displayName: "Intensité"
        },
        {
            "2": "speed",
            displayName: "Vitesse"
        },
        {
            "3": "strength",
            displayName: "Force"
        },
        {
            "4": "endurance",
            displayName: "Endurance"
        },
        {
            "5": "energy",
            displayName: "Energie"
        },
        {
            "6": "cardio",
            displayName: "Cardio"
        },
    ]

    return {
        userId,
        kind,
        data: data.map((perfData) => (
            {
                value: perfData.value,
                kind: subjectData[perfData.kind-1][perfData.kind],
                displayName: subjectData[perfData.kind-1].displayName
            }
        ))
    }
}

export const getUserPerformance = async (apiCheck, userId) => {
    const rawData = await fetchData(apiCheck, userId)
    const userPerformance = formatData(rawData)
    return userPerformance
}