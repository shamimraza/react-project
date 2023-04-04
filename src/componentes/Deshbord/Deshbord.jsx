import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Deshbord = () => {

    const MarksArray = [
        { id: 1, name: 'John', phy: 80, chem: 70, math: 90 },
        { id: 2, name: 'Jane', phy: 85, chem: 80, math: 75 },
        { id: 3, name: 'Bob', phy: 60, chem: 65, math: 70 },
        { id: 4, name: 'Alice', phy: 90, chem: 95, math: 85 },
        { id: 5, name: 'Charlie', phy: 70, chem: 80, math: 60 },
        { id: 6, name: 'David', phy: 75, chem: 85, math: 80 },
        { id: 7, name: 'Eve', phy: 95, chem: 90, math: 95 },
        { id: 8, name: 'Frank', phy: 55, chem: 60, math: 65 },
        { id: 9, name: 'Grace', phy: 70, chem: 75, math: 70 },
        { id: 10, name: 'Henry', phy: 75, chem: 80, math: 85 },
        { id: 11, name: 'Ivy', phy: 80, chem: 85, math: 90 },
        { id: 12, name: 'Jack', phy: 90, chem: 85, math: 75 }
    ];


    return (
        <div>
            <LineChart
                width={800}
                height={300}
                data={MarksArray}
            >
                <Line dataKey="phy"></Line>
                <Line stroke='#8884db' dataKey="math"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div >
    );
};

export default Deshbord;