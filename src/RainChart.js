import React from 'react';
import './style.scss';
import moment from 'moment';
import { Line } from 'react-chartjs-2';


const RainChart = ({ data }) => {
    const chartData = {
        labels: [
            "Now",
            data && moment(data.list[0].dt_txt.slice(11, 13), 'hh').format('LT') || '-',
            data && moment(data.list[1].dt_txt.slice(11, 13), 'hh').format('LT') || '-',
            data && moment(data.list[2].dt_txt.slice(11, 13), 'hh').format('LT') || '-',
            data && moment(data.list[3].dt_txt.slice(11, 13), 'hh').format('LT') || '-',
        ],
        datasets: [{
            label: '',
            backgroundColor: 'transparent',
            borderColor: '#bbb',
            borderDash: [1, 5],
            pointBackgroundColor: '#ddd',
            data: [
                (data && data.list[0].rain && data.list[0].rain['3h']) || 0,
                (data && data.list[1].rain && data.list[1].rain['3h']) || 0,
                (data && data.list[2].rain && data.list[2].rain['3h']) || 0,
                (data && data.list[3].rain && data.list[3].rain['3h']) || 0,
                (data && data.list[4].rain && data.list[4].rain['3h']) || 0,
            ],
        }],
    }

    const lineOptions = {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    fontColor: '#fff',
                }

            }],
            yAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    fontColor: '#fff',
                }
            }],
        },
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },
    };
    return (
        <>
            <h2 className="header">Chance of rain</h2>
            <div className="rain">
                <Line
                    data={chartData}
                    options={lineOptions}
                    height={150}
                    width={400}
                />
            </div>
        </>
    )
}

export default RainChart;
