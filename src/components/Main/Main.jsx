// import React from 'react';
import Details from '../Details/Details';
import Header from '../Header/Header';
// import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';

const Main = () => {

    // const data = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    // ];

    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {`${(percent * 100).toFixed(0)}%`}
    //         </text>
    //     );
    // };

    return (
        <div className='bg-slate-200 rounded-tl-[4rem] w-4/5 p-16 flex flex-col gap-5'>
            <Header />
            <Details />
        </div>
    );
};

export default Main;