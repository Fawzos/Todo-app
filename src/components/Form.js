import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    console.log(name);
    if (!name) {
      alert("Please enter a valid task");
    } else {
      e.preventDefault();
      props.addTask(name);
      setName("");
    }
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        value={name}
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={handleChange}
      />
      <button
        type="submit"
        // disabled={!name}
        className="btn btn__primary btn__lg"
      >
        Add
      </button>
    </form>
  );
}
export default Form;
