import React from "react";
import "./navbar.styles.css";

function Navbar({ handleChange, handleSubmit }) {
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Navbar;
