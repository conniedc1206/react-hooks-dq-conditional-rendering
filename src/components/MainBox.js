import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  const [selectedCategory, setSelectedCategory] = useState("profile");

  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
  };

  const renderPage = () => {
    if (selectedCategory === "profile") {
      return <Profile/>
    } else if (selectedCategory === "photos") {
      return <Photos/>
    } else if (selectedCategory === "cocktails") {
      return <Cocktails/>
    } else if (selectedCategory === "pokemon") {
      return <Pokemon />
    }
  }

  return (
    <div>
      <MenuBar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {renderPage()}
    </div>
  );
}

export default MainBox;
