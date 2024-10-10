import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarController, BarElement } from 'chart.js/auto';
import { CustomerData } from '../data';

Chart.register(BarController, BarElement);


const CategoryDiagram = () => {
    const data = {
        labels: CustomerData.map((data) => data.category),
        datasets: [
            {
                label: 'Критерии',
                data: CustomerData.map((data) => data.customersGained),
                backgroundColor: ['#4FD1C5', '#E9D8FD', '#FC8181', '#F3BA2F', '#2A71D0'],
            },
        ],
    };
    return (
        <div className='w-9/12 pl-96 pt-20'>
            <Bar data={data}/>
        </div>
    );
};

export default CategoryDiagram;