import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUserMainData } from '@/data/getUserMainData'

import { Greeting } from '@/components'
import { KeyDataCard } from '@/components'

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

    const { data:user, isLoading, isError, error } = useQuery({
        queryKey: ['userData'], 
        queryFn: () => getUserMainData(apiCheck, userId)
    })
    
    if (isLoading) return (
        <main>
            <h2>Loading...</h2>
        </main>
    )
    if (isError) return (
        <main>
            <h2>An error has occured: {error.message}</h2>
        </main>
    )
   
    return(
        <main>
            <Greeting
                firstname={user.userInfos.firstName}
            />

            <section>
                {
                    user.keyData.map((data, index) => {
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
            </section>
        </main>
    )
}