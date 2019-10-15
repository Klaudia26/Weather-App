import React from 'react';
import { WiBarometer, WiHumidity, WiTime3, WiCloudyGusts, WiCloud } from "react-icons/wi";
import { FaRegEye } from "react-icons/fa";
import moment from 'moment';

import './style.scss';

const Details = ({ data }) => {
    return (
        <>
            <h2 className="header">Details</h2>
            <div className="details">
                <div className="details__info">
                    <WiBarometer />
                    pressure
                <div>{(data && data.main.pressure) || '-'} hPa</div>
                </div>
                <div className="details__info"><WiHumidity />humidity <div>{(data && data.main.humidity) || '-'} %</div></div>
                <div className="details__info"><WiTime3 />timezone<div>{moment(data && data.timezone).format('[GMT]Z') || '-'}</div></div>
                <div className="details__info"><WiCloudyGusts />wind <div>{(data && data.wind.speed) || '-'} km/h</div></div>
                <div className="details__info"><FaRegEye />visibility <div>{(data && data.visibility / 1000) || '-'} km</div></div>
                <div className="details__info"><WiCloud />clouds <div>{(data && data.clouds.all) || '-'}</div></div>
            </div>
        </>
    )
}

export default Details;
