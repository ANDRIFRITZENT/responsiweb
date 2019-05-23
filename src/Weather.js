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
        .then(parsedJSON => parsedJSON.list.map(data => (
          {
            temp_Min: `${data.main.temp_min}`,
            temp_Max: `${data.main.temp_max}`,
            temp_Aja:  `${data.main.temp}`,
            weather_Aja: `${data.weather[0].main}`,
            dataTime: `${data.dt_txt}`,
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
            
 
          <div className="position">
            <table className="table table-bordered" align="center">
              <thead>
              <tr>
                <th scope="col">Datetime</th>
                <th scope="col">Temp</th> 
                <th scope="col">Temp Min</th>
                <th scope="col">Temp Max</th>
                <th scope="col">Weather</th>
              </tr>
            </thead>
            <tbody>
              {
                items.length > 0 ? items.map(item => {
                  const {dataTime,temp_Aja,temp_Min,temp_Max,weather_Aja} = item;
                  return (
                    <tr key={dataTime}>
                      <td scope="row">
                        {dataTime}
                      </td>
                      <td>
                        {temp_Aja}
                      </td>
                      <td>
                        {temp_Min}
                      </td>
                      <td>
                        {temp_Max}
                      </td>
                      <td>
                        {weather_Aja}
                      </td>
                    </tr>  
                  );
                }) : null
              }
            </tbody>  
          </table>
        </div>
        );
      }
    }
    
    export default Weather;