import React, { useState } from 'react';

function ColorForm({ addColor }) {
  const [formData, setFormData] = useState({ color: "" });

  function handleSubmit(evt) {
    evt.preventDefault();
    
  }
  
  return (
    <form className="NewColorForm" onSubmit={handleSubmit}>

      <div className="form-group">
        <input
            id="newTodo-title"
            name="title"
            className="form-control"
            placeholder="Title"
            onChange={handleChange}
            value={formData.title}
            aria-label="Title"
        />
      </div>
    </form>
  );
}

export default ColorForm