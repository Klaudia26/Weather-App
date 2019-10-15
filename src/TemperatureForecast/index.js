import React from 'react';
import './style.scss';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

const TemperatureForcast = ({ data }) => {
    const chartData = {
        labels: [
            "Now",
            data && moment(data.list[0].dt_txt.slice(11, 13), 'hh').format('LT') || '-',
            data && moment(data.list[1].dt_txt.slice(11, 13), 'hh').format('LT') || '-',
            data && moment(data.list[2].dt_txt.slice(11, 13), 'hh').format('LT') || '-',
            data && moment(data.list[3].dt_txt.slice(11, 13), 'hh').format('LT') || '-',
            data && moment(data.list[4].dt_txt.slice(11, 13), 'hh').format('LT') || '-',
        ],
        datasets: [{
            label: '',
            backgroundColor: 'transparent',
            borderColor: '#bbb',
            borderDash: [1, 5],
            pointBackgroundColor: '#ddd',
            data: [
                (data && data.list[0].main && data.list[0].main.temp) || 0,
                (data && data.list[1].main && data.list[1].main.temp) || 0,
                (data && data.list[2].main && data.list[2].main.temp) || 0,
                (data && data.list[3].main && data.list[3].main.temp) || 0,
                (data && data.list[4].main && data.list[4].main.temp) || 0,
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
                    // display: false,
                    fontColor: '#fff',
                    callback: value => value + '°',
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

export default TemperatureForcast;