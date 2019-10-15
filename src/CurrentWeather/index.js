import React from 'react';
import moment from 'moment';
import './style.scss';

const CurrentWeather = ({ data, city }) => {
    return (
        <div className="currentWeather">
            <div className="currentWeather__country">
                <div className="currentWeather__country--city">{city}</div>
                <div>
                    {moment().format('ddd')}
                    , {moment().format('LT')}
                </div>
            </div>
            <div className="currentWeather__current">
                <div>
                    <div className="currentWeather__current-state">
                        {data && <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='icon' />}
                        {data && <span className="desc"> {data.weather[0].main}</span>}
                    </div>
                    {data && <div className="currentWeather__current-temp">{data.main && Math.round(data.main.temp)}</div>}
                </div>
                <div>
                    {data && <div className="currentWeather__current-max">{data && data.main && Math.round(data.main.temp_max)}</div>}
                    <div className="currentWeather__current--line"></div>
                    {data && <div className="currentWeather__current-min">{data && data.main && Math.round(data.main.temp_min)}</div>}
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;