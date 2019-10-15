import React from 'react';
import moment from 'moment';
import './style.scss';


const Forcast = ({ data }) => {
    return (
        <>
            <h2 className="header">Next days</h2>
            <div className="forcast">
                {data && data.list.map((set, i) => {

                    if (moment().format('YYYY-MM-DD') === set.dt_txt.slice(0, 10) || set.dt_txt.slice(11, 19) !== '00:00:00') {
                        return;
                    }

                    return (
                        <div className="forcast__info" key={set.dt}>
                            <div style={{ fontSize: 13 }}>{moment(set.dt_txt.slice(0, 10)).format('ddd')}</div>
                            <div style={{ fontSize: 13 }}>{set.main.humidity}%</div>
                            <div><img src={`http://openweathermap.org/img/wn/${set.weather[0].icon}@2x.png`} alt='icon' /></div>
                            <div>{Math.round(set.main.temp_max)}°C</div>
                        </div>
                    );
                })}

            </div>
        </>
    )
}



export default Forcast;