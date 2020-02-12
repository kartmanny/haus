import React from 'react';
import { Pie } from 'react-chartjs-2';

const state = {
    labels: ['Master\'s degree or higher', 'Bachelor\'s degree', 'Some college or associate\'s degree', 'High school diploma or equivalent', 'Less than high school diploma'],
    datasets: [
        {
            backgroundColor: ['#c6D4ff', '#ff5a5f', '#fcbc5e', '#f4866b', '#58c8ce'],
            data: [42.2, 26.5, 17.1, 3.2, 11],
        },

    ]
}

const PieChart = () => {
    return (
        <div>
            <Pie
                data={state}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    legend: { 
                        position: 'right'
                    },
                    tooltips: {
                        callbacks: {
                          label: (item, data) => `${data.labels[item.index]}: ${data.datasets[item.datasetIndex].data[item.index]}%`
                        },
                        bodyFontColor: '#484848',
                        backgroundColor: 'rgba(255, 255, 255, .85)'
                      }

                }}

            />
        </div>
    );
};

export default PieChart;
