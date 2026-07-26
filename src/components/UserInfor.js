import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Thành Kka",
    address: "Bo Thanh",
    age: "21",
  };

  handleOnchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOneSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        my name is {this.state.name}
        <form onSubmit={(event) => this.handleOneSubmit(event)}>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnchangeInput(event);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
