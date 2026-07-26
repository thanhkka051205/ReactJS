import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Thanh Kka", age: "16" },
      { id: 2, name: "Thanh Ma", age: "20" },
      { id: 3, name: "Thanh Ok", age: "21" },
    ],
  };

  //JSX
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
