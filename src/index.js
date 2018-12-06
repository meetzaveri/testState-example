import React from "react";
import ReactDOM from "react-dom";
import StateTestWrapper from "./app";
import Form from "./component/form";
import "./styles.css";

class App extends React.Component {
  state = {
    counter: -1,
    flag: true,
    isEnabled: true,
    activateInitialRenderTrigger: false,
    createUserInputEmail: "",
    activateCustomTrigger: false,
    onFormSubmission: false,
    finalName: null,
    inputKeyToCompare: null,
    stateKeyToCompare: null
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
    const { createUserInputEmail } = this.state;
    console.log("Submit form action");

    this.setState({
      activateCustomTrigger: true,
      onFormSubmission: true,
      finalName: createUserInputEmail,
      createUserInputEmail: ""
    });
  };
  render() {
    const { onHandleCreateUserInput, onSubmitForm } = this;
    const actions = { onHandleCreateUserInput, onSubmitForm };
    const {
      activateCustomTrigger,
      activateInitialRenderTrigger,
      counter,
      finalName,
      onFormSubmission
    } = this.state;
    const comparisionStore = {
      _inputKey: "inputKeyToCompare",
      _outputValue: "finalName"
    };
    return (
      <div className="App">
        <button onClick={this.updateCounter}>Start clicking!</button>
        <StateTestWrapper
          stateToSupply={this.state}
          activateOnRender={activateInitialRenderTrigger}
          activateOnCustomMethod={activateCustomTrigger}
          comparisionStore={comparisionStore}
          diffStateKey="finalName"
          getAffectedStateKeys={activateCustomTrigger}
        >
          <h2>Counter {counter}</h2>
          <Form state={this.state} actions={actions} />
          <div>
            Name after submission - {onFormSubmission ? finalName : null}
          </div>
        </StateTestWrapper>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
