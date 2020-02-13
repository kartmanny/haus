import React from 'react';
import { HorizontalBar, defaults } from 'react-chartjs-2';

//defaults.global.defaultFontFamily = 'Brandon';

const DoubleBarChart = ({ barData }) => {
  const state = {
    labels: ['Violent Crimes', 'Property Crimes'],
    datasets: [
      {
        label: 'WestLake Average',
        backgroundColor: 'rgba(75,192,192,0.4)',
        data: barData[0]
      },
      {
        label: 'National Average',
        backgroundColor: '#484848',
        data: barData[1]
      }
    ]
  };
  return (
    <div>
      <HorizontalBar
        data={state}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            display: true
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          layout: {
            padding: {
              right: 0
            }
          },
          tooltips: {
            enabled: true,
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

export default DoubleBarChart;
