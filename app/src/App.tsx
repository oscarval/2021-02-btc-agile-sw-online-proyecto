import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
// Router
import Routes from "./router/Router";

export class App extends React.Component {
  render(): JSX.Element {
    return <Routes />;
  }
}

export default App;
