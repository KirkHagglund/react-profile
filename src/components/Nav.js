import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
      <div>Kirk Hagglund</div>
      <div>
        <a href="#About" onClick={() => handlePageChange("About")}>
          About
        </a>
        <a href="#Portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>
        <a href="#Resume" onClick={() => handlePageChange("Resume")}>
          Resume
        </a>
        <a href="#Contact" onClick={() => handlePageChange("Contact")}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
