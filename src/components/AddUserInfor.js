import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Bo Thanh");
  const [age, setAge] = useState("");

  const handleOnchangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnchangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOneSubmit = (event) => {
    event.preventDefault();

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name} and I am {age} years old.
      <form onSubmit={(event) => handleOneSubmit(event)}>
        <input
          name="name"
          value={name}
          type="text"
          placeholder="Enter name"
          onChange={(event) => handleOnchangeInput(event)}
        />

        <input
          name="age"
          value={age}
          type="text"
          placeholder="Enter age"
          onChange={(event) => handleOnchangeInput(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
