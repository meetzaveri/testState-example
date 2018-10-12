import React from "react";
import { storeState } from "./storestate";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("this.props.stateToSupply", this.props.stateToSupply);
  }

  customMethod = () => {
    console.log("custom method called");
  };

  render() {
    console.log("render called", this.props);
    if (this.props.renderMethodTrigger === true)
      storeState(this.props.stateToSupply);

    if (this.props.customMethodTrigger === true)
      storeState(this.props.stateToSupply);
    return <div>{this.props.children}</div>;
  }
}

export default App;
