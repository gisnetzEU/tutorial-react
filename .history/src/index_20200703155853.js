import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Reddit extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17`).then(res => {
      //const posts = res.data.data.children.map(obj => obj.data);
      const posts = res.data;
      //console.log (posts)
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <h1>/r/reactjs</h1>
        <ul>
          {/* {
             this.state.posts.map(post => {
             return <li key={post.id}>{post.name}</li>;
            
          })} */}
          {
            console.log("here", this.state.posts);
            console.log("name", this.state.posts
           
          }
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Reddit />, document.getElementById("root"));