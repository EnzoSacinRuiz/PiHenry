import React from "react";
import "./navbar.styles.css";

function Navbar({ handleChange, handleSubmit }) {
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Ingresa el apellido"
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default Navbar;
