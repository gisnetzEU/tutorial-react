import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Reddit extends React.Component {
  state = {
    weather: null
  };

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17`).then(res => {
      //const weather = res.data.data.children.map(obj => obj.data);
      const weather = res.data;
      //console.log (weather)
      this.setState({ weather });
    });
  }

  renderWeather(data) {
    return (
      <ul>
        <li>{data.name}</li>
        <li>{data.cod}</li>

        <li>{data.main.humidity}</li>
        <li>{data.main.temp}</li>
        <li>{data.main.temp_min}</li>

        <li>{data.visibility}</li>

        <li>{data.wind.speed}</li>

        <li>{data.timezone}</li>

        <li>{data.dt}</li>

        <li>{data.dt}</li>
      </ul>
    );
  }

  render() {
    const data = this.state.weather;
    console.log("data", data)

    let content;
    if (data) {
      content = this.renderWeather(data);
    } else {
      content = (<p>No results</p>);
    }

    return (
      <div>
        <h1>/r/reactjs</h1>
        {content}
      </div>
    );
  }
}

ReactDOM.render(<Reddit />, document.getElementById("root"));