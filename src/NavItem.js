import React from "react";

const NavItem = ({ itemName, activeItem, onItemClick }) => {
  const isItemActive = itemName === activeItem;

  const handleArrowClick = () => {
    onItemClick(itemName);
  };

  return (
    <div>
      <div onClick={handleArrowClick}>
        {itemName} {isItemActive ? "▲" : "▼"}
      </div>
      {isItemActive && (
        <div>
          {itemName === "Creativity and Design" && <p>Home content here</p>}
          {itemName === "PDF E-Signatures" && <p>About content here</p>}
          {itemName === "Marketing E-Commerce" && <p>About content here</p>}
          {itemName === "Help and Support" && <p>About content here</p>}
          {itemName === "Sign in " && <p>About content here</p>}
        </div>
      )}
    </div>
  );
};

export default NavItem;
