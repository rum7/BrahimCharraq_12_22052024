import getData from '@/data/getData'

import { Greeting } from '@/components'
import { KeyDataCard } from '@/components'
import { ActivityChart } from '@/components'
import { AverageSessionsChart } from '@/components'
import { PerformanceChart } from '@/components'
import { ScoreChart } from '@/components'

import iconCalorie from '@/assets/icon-calorie.svg'
import iconProtein from '@/assets/icon-protein.svg'
import iconCarbs from '@/assets/icon-carbs.svg'
import iconLipid from '@/assets/icon-lipid.svg'

import '@/pages/dashboard/dashboard.style.scss'


let iconData = {}

/**
 * Setting up the icon data for the user cards
 * @function setIcon
 * @param {string} statName 
 * @returns {object}
 */
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


/**
 * Render the dashboard component
 * @function Dashboard
 * @returns {JSX.Element}
 */
export const Dashboard = () => {
    const { 
        isLoading, 
        isError, 
        errorMessage, 
        userStats, 
        userActivity, 
        userAverageSessions, 
        userPerformance        
    } = getData()
    
    if (isLoading) return (
        <main>
            <h2>Loading...</h2>
        </main>
    )
    if (isError) return (
        <main>
            <h2>An error has occured:</h2>
            {errorMessage.map((err) => <p>{err}</p>)}
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
                        <PerformanceChart data={userPerformance.data}/>
                    </div>

                    <div className='user-charts__user-score'>
                        <ScoreChart data={userStats.todayScore}/>
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