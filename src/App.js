import { useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("");

  const handleDate = (e) => {
    const selectValue = e.target.value;
    const DateObj = new Date();
    if (selectValue == "Yesterday") {
      DateObj.setDate(DateObj.getDate() - 1);
      setSelected(
        DateObj.getDate() +
          "-" +
          (DateObj.getMonth() + 1) +
          "-" +
          DateObj.getFullYear()
      );
    } else if (selectValue.split(" ")[0] == "Last") {
      let exactDay = Number(selectValue.split(" ")[1]);
      DateObj.setDate(DateObj.getDate() - exactDay);
      setSelected(
        DateObj.getDate() +
          "-" +
          (DateObj.getMonth() + 1) +
          "-" +
          DateObj.getFullYear()
      );
    } else {
      setSelected("");
    }
  };

  return (
    <div className="App">
      <div className="dropdown-contain">
        <select
          className="dropdown"
          onChange={(e) => handleDate(e)}
          name=""
          id=""
        >
          <option className="option" value="">
            Select Day
          </option>
          <option value="Yesterday">Yestureday</option>
          <option value="Last 7 days">Last 7 days</option>
        </select>
      </div>
      {selected !== "" ? (
        <div>
          <h1>Date: {selected}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
