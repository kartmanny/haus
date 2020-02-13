import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ lineData }) => {
  const config = {
    labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
    datasets: [
      {
        borderWidth: 1,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        data: lineData
      }
    ]
  };
  return (
    <div>
      <Line
        data={config}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  reverse: false
                }
              }
            ]
          },
          layout: {
            padding: {
              left: 10
            }
          },
          tooltips: {
            callbacks: {
              label: (item, data) =>
                `$${data.datasets[item.datasetIndex].data[item.index]}`
            }
          }
        }}
      />
    </div>
  );
};

export default LineChart;
