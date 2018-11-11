import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // console.log("this.props.children", this.props.children);
  }

  render() {
    // console.log("render called");
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.actions.onSubmitForm();
          }}
        >
          {" "}
          <label htmlFor="exampleInputEmail2">Text </label>
          <input
            type="text"
            name="createUserInputEmail"
            className="form-control"
            id="exampleInputEmail2"
            placeholder="text"
            value={this.props.state.createUserInputEmail}
            onChange={e => {
              this.props.actions.onHandleCreateUserInput(e);
            }}
          />
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default App;
