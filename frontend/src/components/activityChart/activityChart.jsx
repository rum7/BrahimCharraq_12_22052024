import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import '@/components/activityChart/activityChart.style.scss'


/**
 * Render a customized cursor for the activity chart component
 * @function CustomCursor
 * @param {{ 
 *  x: number,
 *  y: number,
 *  width: number,
 *  height: number
 * }}
 * @returns {JSX.Element}
 */
function CustomCursor({ x, y, width, height }) {
    return(
        <Rectangle
            x={x}
            y={y}
            width={width}
            height={height}
            fill="#C4C4C4"
            fillOpacity="0.5"
        />
    )
}


/**
 * Render a customized tooltip for the activity chart component
 * @function CustomTooltip
 * @param {{ 
 *  payload: Array<{ value: number }>,
 *  active: boolean 
 * }}
 * @returns {JSX.Element}
 */
function CustomTooltip({ payload, active }) {
    if (active) {
        return (
            <div className="activity-chart__tooltip">
                <p className="label">{`${payload[0].value}kg`}</p>
                <p className="label">{`${payload[1].value}kCal`}</p>
            </div>
        )
    }

    return null;
}


/**
 * Render the activity chart component
 * @function ActivityChart
 * @param {{ data: Array<{ 
 *  day: number,
 *  kilogram: number,
 *  calories: number
 * }>}}
 * @returns {JSX.Element}
 */
export const ActivityChart = ({ data }) => {    
    return(
        <ResponsiveContainer height={272}>
            <BarChart
                width={762}
                height={100}
                data={data}
                barGap={8}
                barSize={7}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}            
            >
                <CartesianGrid strokeDasharray="2 2" vertical={false} />
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickCount={7}      
                    axisLine={{ stroke: '#DEDEDE' }}
                    tick={{ fill: '#9B9EAC' }}
                    tickMargin={20}
                    height={40}
                    type="number"
                    domain={['dataMin', 'dataMax']}    
                    padding="no-gap"
                />
                <YAxis
                    yAxisId="kg"
                    dataKey="kilogram"
                    axisLine={false}
                    tickLine={false}
                    tickCount={3}
                    tickMargin={25}
                    orientation='right'
                    tick={{ fill: '#9B9EAC' }}
                    domain={['dataMin - 1', 'dataMax + 2']}
                />
                <YAxis
                    yAxisId="cal"
                    dataKey="calories"
                    hide={true}
                    orientation='left'
                    domain={['dataMin - 50', 'dataMax + 50']}
                />
                <Tooltip 
                    cursor={<CustomCursor />} 
                    content={<CustomTooltip />}
                />
                <Legend 
                    align='right'
                    verticalAlign='top'
                    height={50}
                    iconSize={10}
                    iconType='circle'
                    formatter={(value) => <span style={{ color: '#74798C'}}>{value}</span>}
                />
                <Bar
                    yAxisId="kg"
                    dataKey="kilogram"
                    fill="#282D30"
                    radius={[6, 6, 0, 0]}
                    animationDuration={1000}
                    name="Poids (kg)"
                />
                <Bar
                    yAxisId="cal"
                    dataKey="calories"
                    fill="#E60000"
                    radius={[6, 6, 0, 0]}
                    animationDuration={1000}
                    name="Calories brûlées (kCal)"
                />
                <text className='activity-chart__title' x="0" y="3" dominantBaseline="hanging">Activité quotidienne</text>
            </BarChart>
        </ResponsiveContainer>
    )
}