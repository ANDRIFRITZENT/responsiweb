import React, { Component } from "react";

class Weather extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Yogyakarta,id&mode=json&appid=99819fc994ebea37f427a44f569e9cdf&units=metric")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            temp_Min: `${data.list.main.temp_min}`,
            temp_Max: `${data.list.main.temp_max}`,
            temp_Aja:  `${data.list.main.temp}`,
            weather_Aja: `${data.list.main.weather}`,
            dataTime: `${data.list.dt_txt}`,
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
      }
    
      render() {
        const {items} = this.state;
        return (
          <div className="boxWhite">
            {
              items.length > 0 ? items.map(item => {
                const {temp_Aja, temp_Min, temp_Max, weather_Aja, dataTime} = item;
                return (
                  <div className="bgCircle">
                    <div className="ctr">
                      ini temp :{temp_Aja}<br />
                      ini temp_min :{temp_Min}<br />
                      ini temp_max :{temp_Max}<br />
                      ini weather_aja :{weather_Aja}<br />
                      ini datatime :{dataTime}<br />
                    </div>
    
                  </div>
                );
              }) : null
            }
          </div>
        );
      }
    }
    
    export default Weather;