import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Reddit extends React.Component {
  state = {
    weather: {
      name: '',
      description: '',
      main: '',
    }
  };

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17`).then(res => {
      //const weather = res.data.data.children.map(obj => obj.data);
      const weather = res.data;
      //console.log (weather)
      this.setState({ weather });
    });
  }

  render() {
    return (
      <div>
        <h1>/r/reactjs</h1>
        <ul>
            <li>{ this.state.weather.name }</li>
            <li>{ this.state.weather.description }</li>
            <li>{ this.state.weather.main.temp }</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Reddit />, document.getElementById("root"));