import React, { useState } from "react";

function App() {
  //set state for new input items
  const [inputText, setInputText] = useState("");
  //set up new empty array ready to hold new list items
  const [items, setItems] = useState([]);

  function handleChange(event) {
    //create a const that will keep hold of the new value input
    //only one value being input so we don't need to destructure
    const newValue = event.target.value;
    setInputText(newValue);
  }

  //now want to create a function to add any new items to the items array
  //so will add all prevItems and then add the new inputText
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    //once updated list, reset input area ready for next input
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="newItem"
          placeholder="new item"
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
