import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

import '@/components/performanceChart/performanceChart.style.scss'


/**
 * Render a customized label for the performance chart component
 * @function CustomizedLabel
 * @param {{ 
 *  index: number,
 *  x: number,
 *  y: number,
 *  payload: { value: string } 
 * }}
 * @returns {JSX.Element}
 */
const CustomizedLabel = ({ index, x, y, payload }) => {
    const tickClass = () => {
        if ( index === 0 ) return 'top-tick' 
        if ( index === 1 ) return 'top-right-tick' 
        if ( index === 2 ) return 'bottom-right-tick' 
        if ( index === 3 ) return 'bottom-tick' 
        if ( index === 4 ) return 'bottom-left-tick'
        if ( index === 5 ) return 'top-left-tick' 
    }

    return (
        <text 
            x={x} 
            y={y} 
            textAnchor="middle" 
            className={`default-tick ${tickClass()}`}
        >
            {payload.value}
        </text>
    )
}


/**
 * Render the performance chart component
 * @function PerformanceChart
 * @param {{ data: Array<{
 *  displayName: string,
 *  value: number
 * }>}}
 * @returns {JSX.Element}
 */
export const PerformanceChart = ({ data }) => {
    return(
        <>
            <ResponsiveContainer height={260}>
                <RadarChart 
                    cx="50%" 
                    cy="51%" 
                    outerRadius="65%"
                    data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}                    
                >
                    <PolarGrid 
                        polarRadius={[10, 25, 45, 65, 85]}
                        radialLines={false} 
                        stroke='#fff'
                    />
                    <PolarAngleAxis
                        dataKey="displayName"
                        tick={<CustomizedLabel />}
                    />
                    <Radar 
                        dataKey="value" 
                        fill="#FF0101" 
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}