import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import '@/components/scoreChart/scoreChart.style.scss'


/**
 * Render the score chart component
 * @param {{ data: number }}
 * @returns {JSX.Element}
 */
export const ScoreChart = ({ data }) => {
    const scoreMax = [{ value: 1 }]
    const score = [
        { value: data },
        { value: 1 - data }
    ]

    const COLORS = ['#FF0000', 'transparent'];

    return(
        <>
            <h3>Score</h3>
            <ResponsiveContainer height={260}>
                <PieChart width={400} height={400}>
                    <Pie 
                        data={scoreMax} 
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        innerRadius={0} 
                        outerRadius={90}
                        blendStroke={true}
                        isAnimationActive={false}
                        fill="#fff" 
                    />
                    <Pie
                        data={score}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        innerRadius={90}
                        outerRadius={100}
                        blendStroke={true}
                        cornerRadius="50%"
                    >
                        {COLORS.map((cellColor, index) => (
                            <Cell key={`cell-${index}`} fill={cellColor} />
                        ))}
                    </Pie>
                    <foreignObject width='100%' height='100%'>
                        <p className='score-chart-label'>
                            <span className='score-chart-label__value'>{Math.round(data * 100)}%</span>
                            <span className='score-chart-label__desc'>de votre <br/> objectif</span>
                        </p>
                    </foreignObject>
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}