import React from "react";

function MenuBar({ selectedCategory, onCategoryChange }) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const handleClick = (e) => {
    onCategoryChange(e.target.id);
  };

  return (
    <div className="ui four item menu">
      <span className={selectedCategory === "profile" ? "item active" : "item"}>
        <i onClick={handleClick} className="user large icon" id="profile" />
      </span>

      <span className={selectedCategory === "photos" ? "item active" : "item"}>
        <i onClick={handleClick} className="photo large icon" id="photos" />
      </span>

      <span
        className={selectedCategory === "cocktails" ? "item active" : "item"}
      >
        <i
          onClick={handleClick}
          className="cocktail large icon"
          id="cocktails"
        />
      </span>

      <span className={selectedCategory === "pokemon" ? "item active" : "item"}>
        <i
          onClick={handleClick}
          className=" themeisle large icon"
          id="pokemon"
        />
      </span>
    </div>
  );
}

export default MenuBar;
