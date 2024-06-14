import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { getUserMainData } from '@/data/getUserMainData'
import { getUserActivity } from '@/data/getUserActivity'
import { getUserAverageSessions } from '@/data/getUserAverageSessions'
import { getUserPerformance } from '@/data/getUserPerformance'


/**
 * Group all the data with loading and error state
 * @function getData
 * @returns {object}
 */
export default function getData() {
    const { apiCheck } = useParams()
    const { userId } = useParams()
    let isLoading = true
    let isError = false
    let errorMessage = []

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

    const { 
        data: userPerformance,
        isLoading: userPerformanceIsLoading,
        isError: userPerformanceIsError,
        error: userPerformanceError 
    } = useQuery({ queryKey: ['userPerformanceData'], queryFn: () => getUserPerformance(apiCheck, userId) })

    if (!userStatsIsLoading && !userActivityIsLoading &&!userAverageSessionsIsLoading && !userPerformanceIsLoading) {
        isLoading = false
    }

    if (userStatsIsError || userActivityIsError || userAverageSessionsIsError || userPerformanceIsError) {
        isError = true

        userStatsIsError ? errorMessage = [userStatsError.message] : null
        userActivityIsError ? errorMessage = [...errorMessage, userActivityError.message] : null        
        userAverageSessionsIsError ? errorMessage = [...errorMessage, userAverageSessionsError.message] : null        
        userPerformanceIsError ? errorMessage = [...errorMessage, userPerformanceError.message] : null        
    }

    return { isLoading, isError, errorMessage, userStats, userActivity, userAverageSessions, userPerformance }
}