import React from "react";
import MenuLists from "./MenuLists";

const Menu = () => {
  const fakeLists = [
    { id: 1, name: "List 1", color: "blue", length: 3 },
    { id: 2, name: "List 2", color: "red", length: 5 },
  ];

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div class="search-container">
        <span class="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        <input type="text" class="search-input" placeholder="Search"></input>
      </div>
      <MenuLists lists={fakeLists} />
    </div>
  );
};

export default Menu;
