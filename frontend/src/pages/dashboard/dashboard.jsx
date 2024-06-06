import { useParams } from 'react-router-dom'
import { useQuery, useQueries } from '@tanstack/react-query'
import { getUserMainData } from '@/data/getUserMainData'
import { getUserActivity } from '@/data/getUserActivity'
import { getUserAverageSessions } from '@/data/getUserAverageSessions'

import { Greeting } from '@/components'
import { KeyDataCard } from '@/components'
import { ActivityChart } from '@/components'
import { AverageSessionsChart } from '@/components'

import iconCalorie from '@/assets/icon-calorie.svg'
import iconProtein from '@/assets/icon-protein.svg'
import iconCarbs from '@/assets/icon-carbs.svg'
import iconLipid from '@/assets/icon-lipid.svg'

import '@/pages/dashboard/dashboard.style.scss'


let iconData = {}

function setIcon(statName) {
    if (statName === 'calorie') {
        iconData.path = iconCalorie,
        iconData.bgIcon = 'rgb(255 0 0 / 6%)'
    }
    if (statName === 'protein') {
        iconData.path = iconProtein,
        iconData.bgIcon = 'rgb(74 184 255 / 10%)'
    }
    if (statName === 'carbs') {
        iconData.path = iconCarbs,
        iconData.bgIcon = 'rgb(249 206 35 / 10%)'
    }
    if (statName === 'lipid') {
        iconData.path = iconLipid,
        iconData.bgIcon = 'rgb(253 81 129 / 10%)'
    }
    
    return iconData
}

export const Dashboard = () => {
    const { apiCheck } = useParams()
    const { userId } = useParams()

    const { 
        data: userStats,
        isLoading: userStatsIsLoading,
        isError: userStatsIsError,
        error: userStatsError 
    } = useQuery({ queryKey: ['userMainData'], queryFn: () => getUserMainData(apiCheck, userId) })

    const { 
        data: userActivity,
        isLoading: userActivityIsLoading,
        isError: userActivityIsError,
        error: userActivityError 
    } = useQuery({ queryKey: ['userActivityData'], queryFn: () => getUserActivity(apiCheck, userId) })
   
    const { 
        data: userAverageSessions,
        isLoading: userAverageSessionsIsLoading,
        isError: userAverageSessionsIsError,
        error: userAverageSessionsError 
    } = useQuery({ queryKey: ['userAverageSessionsData'], queryFn: () => getUserAverageSessions(apiCheck, userId) })
    
    if (userStatsIsLoading || userActivityIsLoading || userAverageSessionsIsLoading) return (
        <main>
            <h2>Loading...</h2>
        </main>
    )
    if (userStatsIsError || userActivityIsError || userAverageSessionsIsError) return (
        <main>
            <h2>An error has occured:</h2>
            {userStatsIsError && <p>{userStatsError.message}</p>}
            {userActivityIsError && <p>{userActivityError.message}</p>}
            {userAverageSessionsIsError && <p>{userAverageSessionsError.message}</p>}
        </main>
    )
   
    return(
        <main>
            <Greeting
                firstname={userStats.userInfos.firstName}
            />

            <section className='user-data'>
                <div className="user-charts">
                    <div className='user-charts__user-activity'>
                        <ActivityChart data={userActivity.sessions} />
                    </div>

                    <div className='user-charts__user-average-session'>
                        <AverageSessionsChart data={userAverageSessions.sessions} />
                    </div>

                    <div className='user-charts__user-performance'>
                    </div>

                    <div className='user-charts__user-score'>
                    </div>
                    
                </div>

                <div className="user-score">
                    {
                        userStats.keyData.map((data, index) => {
                            setIcon(data.name)
                            return (
                                <KeyDataCard 
                                    key={index}
                                    icon={iconData.path}
                                    bgIcon={iconData.bgIcon}
                                    displayName={data.displayName}
                                    value={data.value}
                                    unit={data.unit}
                                />
                            )                                            
                        })
                    }
                </div>
            </section>

        </main>
    )
}