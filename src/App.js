import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Title from './components/title'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY="eeaaf0e7f8436591cff28dac7e2d70c9";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       temp: undefined,
       city: undefined,
       country: undefined,
       humidity: undefined,
       desc: undefined,
       error: undefined


    }
  }
  
  getWeather=async(e)=>{
      e.preventDefault();
      const city=e.target.elements.city.value;
      const country=e.target.elements.country.value;
      const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
      const data=await api_call.json();
      
      if(data.cod==='404')
      {
        this.setState({
          error: "City Not Found"
        })
      }
      else if(city && country)
      {
      console.log(data);
      this.setState({
        temp: (data.main.temp-273.15).toFixed(2),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        error: ""
      });
    }
    else {
        this.setState({
        
        error: "Please Enter City & Country"
        })
    }
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow center>
          <MDBCol middle="true" sm="8" className="text-center">
          
          <Title/>
          </MDBCol>
          </MDBRow>
        <MDBRow>
          <MDBCol>
          <Form getWeather={this.getWeather}/>
          </MDBCol>
        </MDBRow>
        <MDBRow center>
          <MDBCol size="4">
          <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          desc={this.state.desc}
          error={this.state.error}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
