import React from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
const data = {
    labels: [
        'USDT',
        'NBST',
        'EFT',
        'WET'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100, 200],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 99, 132)'
        ],
        hoverOffset: 4
    }]
};

const options = {
    maintainAspectRatio: false, // To prevent chart deformation
};

const DonutChart = () => {
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DonutChart;