// import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

const Chart = () => {
    // const cardinal = curveCardinal.tension(0.2);

    const data = [
        {
            name: 'Page A',
            uv: 200,
            pv: 100,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 100,
            pv: 40,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 300,
            pv: 150,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 100,
            pv: 50,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 400,
            pv: 200,
            amt: 2181,
        },
    ];

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.3} strokeWidth={4} />
                    <Area type="monotone" dataKey="pv" stroke="#fbbf24" fill="#fbbf2400" fillOpacity={0.3} strokeWidth={4} strokeDasharray='3 5' />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
};

export default Chart;