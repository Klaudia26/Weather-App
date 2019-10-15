import React from 'react';
import './style.scss';
import RainChart from './RainChart';
import Details from './Details';
import Forcast from './Forcast';
import CurrentWeather from './CurrentWeather';
import TemperatureForcast from './TemperatureForecast';

class App extends React.Component {
    state = {
        city: "",
        currentWeather: null,
        forcastWeather: null,
    }

    handleChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=437373aed2dace2032291928257abf5e`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then(res => this.setState({
                forcastWeather: res,
                error: "",
            }))
            .catch(error => this.setState({
                forcastWeather: null,
                error: error.message
            }))

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=437373aed2dace2032291928257abf5e`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then(res => this.setState({
                currentWeather: res,
                error: "",
            }))
            .catch(error => this.setState({
                currentWeather: null,
                error: error.message
            }))
    }

    render() {
        console.log(this.state.forcastWeather)
        return (
            <>
                <form className="form-city" onSubmit={this.handleSubmit}>
                    <label >Enter city
                    <input className="input-city" onChange={this.handleChange} value={this.state.city} />
                    </label>
                </form>
                <div className="app">
                    <div className="card">
                        <CurrentWeather data={this.state.currentWeather} city={this.state.city} />
                        <TemperatureForcast data={this.state.forcastWeather} />
                    </div>
                    <div className="card">
                        <Details data={this.state.currentWeather} />
                        <RainChart data={this.state.forcastWeather} />
                        <Forcast data={this.state.forcastWeather} />
                    </div>
                </div>
            </>
        )
    }
};


export default App;