import React, { Component } from 'react'

class Weather extends Component {
  render() {
    return (
      <div className="text-center font-weight-bolder">
        {this.props.city && this.props.country && <p>Location: {this.props.city} {this.props.country}</p>}
        {this.props.temp && <p>Temperature: {this.props.temp} °C</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.desc && <p>Conditions: {this.props.desc}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}

export default Weather
