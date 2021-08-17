import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const initialFormData = { color: "" };

function ColorForm({ add }) {
  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    add(formData.color);
    setFormData(initialFormData);
    history.push("/colors");
  }

  return (
    <form className="NewColorForm" onSubmit={handleSubmit}>
      <h1> New Color Form</h1>
      <div className="form-group">
        <label htmlFor="newColor-name"> Color: </label>
        <input
          id="newColor-name"
          name="color"
          className="form-control"
          placeholder="Color"
          onChange={handleChange}
          value={formData.color}
          aria-label="Color"
        />
      </div>
      <button> Submit </button>
    </form>
  );
}

export default ColorForm;
