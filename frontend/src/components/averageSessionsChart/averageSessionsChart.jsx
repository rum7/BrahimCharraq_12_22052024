import { LineChart, Line, Rectangle, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import '@/components/averageSessionsChart/averageSessionsChart.style.scss'


/**
 * Render a customized cursor for the average sessions chart component
 * @function CustomCursor
 * @param {{ 
 *  x: number,
 *  y: number,
 *  width: number,
 *  height: number
 * }}
 * @returns {JSX.Element}
 */
function CustomCursor({ points, width, height }) {
    return(
        <Rectangle
            x={points[0].x}
            y={points[0].y}
            width={width}
            height={height + 30}
            fill="#000"
            fillOpacity="0.1"
        />
    )
}


/**
 * Render a customized tooltip for the average sessions chart component
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
            <div className="average-session__tooltip">
                <p className="label">{`${payload[0].value}min`}</p>
            </div>
        )
    }

    return null;
}


/**
 * Render the average session chart component
 * @function AverageSessionsChart
 * @param {{ data: Array<{
 *  day: string,
 *  sessionLength: number
 * }>}}
 * @returns {JSX.Element}
 */
export const AverageSessionsChart = ({ data }) => {
    return(
        <>
            <h3>Durée moyenne des sessions</h3>
            <ResponsiveContainer height={260}>
                <LineChart 
                    width={730} 
                    height={250} 
                    data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
                            <stop offset="0%" stopColor="#fff" stopOpacity={1}/>
                            <stop offset="100%" stopColor="#fff" stopOpacity={.2}/>
                        </linearGradient>
                    </defs>
                    <XAxis 
                        dataKey="day"
                        padding={{left: 15, right: 15}}
                        axisLine={false}
                        tickSize={0}
                        height={30}
                        tick={{ fill: 'rgba(255, 255, 255, 0.5)'}}
                    />
                    <YAxis 
                        hide={true}
                        domain={['dataMin - 20', 'dataMax + 50']}                        
                    />
                    <Tooltip 
                        cursor={<CustomCursor />}
                        content={<CustomTooltip />}
                    />
                    <Line 
                        type="natural" 
                        allowDataOverflow={true} 
                        dataKey="sessionLength" 
                        stroke="url(#colorUv)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, fill:'#fff', className: 'average-session__active-dot'}}
                    />
                </LineChart>            
            </ResponsiveContainer>
        </>
    )
}