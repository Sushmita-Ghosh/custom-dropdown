import React, { useState } from "react";
import "./App.css";
import menu from "./menu.json";

function App() {
  // for making the items visible
  const [isDropdownVisible, setIsDropDownVisible] = useState(false);
  // list of items
  // eslint-disable-next-line
  const [itemsList, setItemsList] = useState(menu);

  // to populate the userselected element

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  // to populate the search term
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h1>Custom Dropdown with Search</h1>
      <div className="custom-dropdown">
        {/* if we are selecting an item -> then the index which is stored -> we will map to itemsList array */}
        <div
          className="dropdown-selectedItem"
          onClick={(e) => {
            setIsDropDownVisible(!isDropdownVisible);
          }}
        >
          {selectedItemIndex !== null
            ? selectedItemIndex
            : "Please select an item"}
        </div>

        {/* dropdownlist */}
        {isDropdownVisible && (
          <>
            <div className="dropdown-item-list">
              {/* the search bar component */}
              <div className="search-bar-filter">
                <input
                  type="text"
                  placeholder="Search from list"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {/* we are first filtering according to the search term */}
              {itemsList
                .filter((item) => {
                  if (searchTerm === "") return item;
                  else
                    return item.value
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
                })
                .map((item, index) => (
                  <div
                    className="dropdown-item"
                    key={item.id}
                    onClick={(e) => {
                      setSelectedItemIndex(item.value);
                      setIsDropDownVisible(false);
                      setSearchTerm(""); // to make the full list appear once it has been selected
                    }}
                  >
                    {item.value}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
