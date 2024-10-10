import React from 'react';
import { Pie } from 'react-chartjs-2';
import { CustomerData } from '../data2';


const GeneralDiagram = () => {

    const data = {
        labels: CustomerData.map((data2) => data2.category),
        datasets: [
            {
                label: 'Cutomers Lost',
                data: CustomerData.map((data) => data.percent),
                backgroundColor: ['#4FD1C5', '#f3ba2f'],
            },
        ],
    };

    return (
        <div className='w-9/12 h-96 pl-96 pt-20 p-96'>
            <Pie data={data}/>
        </div>
    );
};

export default GeneralDiagram;