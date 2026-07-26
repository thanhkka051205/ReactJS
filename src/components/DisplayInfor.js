import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfro = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="display-infor-container">
      <div>
        <span
          onClick={() => {
            handleShowHideListUser();
          }}
        >
          {isShowHideListUser === true ? "Hide List User" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <div>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default DisplayInfro;
