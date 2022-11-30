import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const boxIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const [selectedBox, setSelectedBox] = useState([]);

  const handleClick = (id) => {
    if (selectedBox.includes(id)) {
      
      setSelectedBox(selectedBoxes => selectedBoxes.filter((selectedBoxId) => selectedBoxId !== id))
    } else {
      setSelectedBox(selectedBoxes => [...selectedBoxes, id].slice(selectedBoxes.length >1 ? 1 : 0))
    }
  };

  return (
    <div className="App px-8">
      <div className="tile-container">
        {boxIds.map((boxItem) => {
          const isSelected = selectedBox.includes(boxItem);
          return (
            <div
              key={boxItem}
              className={`tile-item ${isSelected ? "bg-red-700" : "bg-blue-800"}`}
              onClick={() => handleClick(boxItem)}
            />
          );
        })}
      </div>
      <div>
      <p className="font-sans mt-8">
        Developed by Abhijit Singh
      </p>
      <p><a href="mailto:itzabhijits@gmail.com">(itzabhijits@gmail.com)</a></p>
      </div>
      
    </div>
  );
}

export default App;
