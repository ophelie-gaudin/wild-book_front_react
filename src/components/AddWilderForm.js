import React, { useState } from "react";
import axios from "axios";

const AddWilderForm = () => {
  const [name, setName] = useState("");

  const addWilder = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/wilders`, {
        name: name,
      });
      console.log(name);
    } catch (err) {
      console.log("Register error: ", err);
    }
  };

  return (
    <form action="" onSubmit={addWilder} id="sign-up-form">
      <br />
      <br />
      <br />

      <label htmlFor="name">Name </label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <div className="name error"></div>
      <br />

      <input type="submit" value="Ajouter un nouveau wilder" />
    </form>
  );
};

export default AddWilderForm;
