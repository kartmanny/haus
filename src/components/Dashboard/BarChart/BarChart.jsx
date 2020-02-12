import React from 'react';
import { HorizontalBar, defaults} from 'react-chartjs-2';

//defaults.global.defaultFontFamily = 'Brandon';

const BarChart = ({barData}) => {
    const state = {
        labels: ['Median Average Income', 'National Median Average Income'],
        datasets: [
            {
                backgroundColor: ['#ff5a5f', '#484848'],
                barThickness: 50,
                data: barData
            },
    
        ]
    }
    return (
        <div>
            <HorizontalBar
                data={state}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                    layout: {
                        padding: {
                            right: 0,
                        }
                    },
                    tooltips: {
                        enabled: true,
                        callbacks: {
                            label: (item, data) => `$${data.datasets[item.datasetIndex].data[item.index]}`
                        },
                    },
                    animation: {
                        /*duration: 1,
                        onComplete: function () {
                            var chartInst = this.chart;
                            var ctx = chartInst.ctx;
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';
                            ctx.font = '20px Brandon';
                            ctx.fontColor = 'white';

                            this.data.datasets.forEach(function (dataset, i) {
                                var meta = chartInst.controller.getDatasetMeta(i);
                                meta.data.forEach(function (bar, index) {
                                    var data = dataset.data[index];
                                    ctx.fillText('$' + data, bar._model.x + 100, bar._model.y + 10);
                                });
                            });

                        }*/
                    }

                }}

            />
        </div>
    );
};

export default BarChart;
