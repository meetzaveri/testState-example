import React from "react";
import ReactDOM from "react-dom";
import Frap from "./app";
import Form from "./form";
import "./styles.css";

class App extends React.Component {
  state = {
    counter: -1,
    flag: true,
    initialRender: true,
    createUserInputEmail: "",
    customMethodTrigger: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ counter: 0 });
    }, 1000);
  }
  updateCounter = () => {
    let counter = this.state.counter;
    this.setState({ counter: counter + 1, initialRender: false });
  };
  onHandleCreateUserInput = e => {
    console.log("e.target.value", e.target.value);
    this.setState({ createUserInputEmail: e.target.value });
  };
  onSubmitForm = () => {
    console.log("Submit form action");
    this.setState({ customMethodTrigger: true });
  };
  render() {
    const { onHandleCreateUserInput, onSubmitForm } = this;
    const actions = { onHandleCreateUserInput, onSubmitForm };
    const { customMethodTrigger } = this.state;
    return (
      <div className="App">
        <button onClick={this.updateCounter}>Start clicking!</button>
        <Frap
          stateToSupply={this.state}
          renderMethodTrigger={false}
          customMethodTrigger={customMethodTrigger}
        >
          <h2>Counter {this.state.counter}</h2>
          <Form state={this.state} actions={actions} />
        </Frap>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
