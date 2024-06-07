import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

import '@/components/performanceChart/performanceChart.style.scss'

const CustomizedLabel = ({ index, x, y, payload }) => {
    // const specialStyle = {
    //     fontSize: 15,
    // }
    // const defaultStyle = {
    //     fontSize: 12,
    // }
    // const style = index === 3 ? {...defaultStyle, ...specialStyle2} : defaultStyle

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
            // dx={0} 
            // dy={0} 
            // style={style}
            className={`default-tick ${tickClass()}`}
        >
            {payload.value}
        </text>
    )
}

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