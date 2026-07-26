import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "Bo Thanh",
    age: "",
  };

  // Modern way to handle multiple inputs dynamically using the 'name' attribute
  handleOnchangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value, // dynamically sets 'name' or 'age' based on the input field
    });
  };

  handleOneSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age, // Fix: Include the age string in the new user object
    });

    // Optional: Clear form inputs after successful submission
    this.setState({ name: "", age: "" });
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I am {this.state.age} years old.
        <form onSubmit={(event) => this.handleOneSubmit(event)}>
          <input
            name="name"
            value={this.state.name}
            type="text"
            placeholder="Enter name"
            onChange={(event) => this.handleOnchangeInput(event)}
          />

          <input
            name="age"
            value={this.state.age}
            type="text"
            placeholder="Enter age"
            onChange={(event) => this.handleOnchangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
