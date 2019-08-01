import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  render() {
    return (
      <div>
        <h1>You are inside the App component</h1>
        {this.props.children}
      </div>
    );
  }
}

class Router extends React.Component {
  parsePath(path) {
    // ['']
    // ['', 'about']
    // ['', 'posts', 'why-react-is-great'] // fetch Post
    // ['', 'facts', 'k34k3i5nh5iuh23h23i4rj'] // fetch Fact
    const parts = path.split("/");
    return {
      base: parts[0],
      path: parts[1],
      arg: parts[2]
    };
  }

  route(pathParts) {
    if (pathParts.base === "" && pathParts.path && pathParts.arg) {
      return <Post post={pathParts.arg} />;
    } else if (pathParts.base === "" && pathParts.path) {
      return <About />;
    } else {
      return <Home />;
    }
  }

  render() {
    return <App>{this.route(this.parsePath(document.location.pathname))}</App>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Router />, rootElement);
