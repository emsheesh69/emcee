import React, { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  return (
    <div className="navbar">
      <NavItem
        itemName="Creativity and Design"
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
      <NavItem
        itemName="PDF E-Signatures"
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
      <NavItem
        itemName="Marketing E-Commerce"
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
      <NavItem
        itemName="Help and Support"
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
      <NavItem
        itemName="Sign in"
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default Navbar;
