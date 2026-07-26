import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Thanh Kka", age: "21" },
//       { id: 2, name: "Thanh Ma", age: "20" },
//       { id: 3, name: "Thanh Ok", age: "21" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUserClone = [...this.state.listUsers];
//     listUserClone = listUserClone.filter((item) => item.id !== userId);

//     // Fixed: changed 'serState' to 'setState'
//     this.setState({
//       listUsers: listUserClone,
//     });
//   };

//   render() {
//     return (
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>

//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Thanh Kka", age: "21" },
    { id: 2, name: "Thanh Ma", age: "20" },
    { id: 3, name: "Thanh Ok", age: "21" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userId);

    setListUsers(listUserClone);
  };

  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>

      <div className="b"></div>
    </>
  );
};
export default MyComponent;
