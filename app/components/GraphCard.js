"use client"
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Chart ,Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

function createGradient(ctx, area) {
    const colorStart = 'rgba(75, 192, 192, 0.2)';
    const colorEnd = 'rgba(75, 192, 192, 1)';
    if (!ctx.canvas) {
        return null;
    }
    const gradient = ctx.canvas.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);

    return gradient;
}

const GraphCard = () => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                const apiData = response.data.data;

                const labels = apiData.map(entry => entry.Nation);
                const populations = apiData.map(entry => entry.Population);

                const chartData = {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Population',
                            data: populations,
                            backgroundColor: ctx => createGradient(ctx, chartRef.current.chartArea),
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                };

                setChartData(chartData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='GraphtoCard w-1/3 bg-gray-800 p-5 rounded flex flex-col mr-5 mt-10 '>
            <div className='flex items-center'>
                <h2 className='flex-1'>Market Overview</h2>
                <p className='text-sm text-gray-600 mx-2'>NBFT</p>
                <p className='text-sm text-gray-600'>WET</p>
            </div>

            <Line ref={chartRef} data={chartData} />
            <div className='flex mt-2 justify-between'>
                <p className='inline-block max-sm:text-sm'>Get in depth charts in Trade</p>
                <button className='px-3 py-1 block bg-lime-600 text-black rounded'>Trade</button>
            </div>
        </div>
    )
}

export default GraphCard