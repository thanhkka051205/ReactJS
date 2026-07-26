import React from "react";
import AddUserInfor from "./AddUserInfor"; // or UserInfor depending on your setup
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Thanh Kka", age: "21" },
      { id: 2, name: "Thanh Ma", age: "20" },
      { id: 3, name: "Thanh Ok", age: "21" },
    ],
  };

  // 1. Create the function to add a new user to the state
  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers], // adds new user to the top of the list
    });
  };

  render() {
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br />
          <DisplayInfor listUsers={this.state.listUsers} />
        </div>

        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
