import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const BarChart = ({ barData }) => {
  const config = {
    labels: ['Median Average Income', 'National Median Average Income'],
    datasets: [
      {
        backgroundColor: ['#ff5a5f', '#484848'],
        barThickness: 50,
        data: barData
      }
    ]
  };
  return (
    <div>
      <HorizontalBar
        data={config}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
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
          },
          animation: {}
        }}
      />
    </div>
  );
};

export default BarChart;
