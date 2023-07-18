import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [add, setAdd] = useState("");
  let country = ["", "India", "US", "UK"];

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAddress = (e) => {
    setAdd(e.target.value);
  };
  const handleSubmit = (e) => {
    e.prevent.default();
    console.log("submitted form successfully");
  };
  const handleFemale = () => {
    console.log("Female is selected");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" onChange={(e) => handleName(e)} value={name}></input>
        <br />
        <br />

        <label>Address:</label>
        <input
          type="text"
          onChange={(e) => handleAddress(e)}
          value={add}
        ></input>
        <br />
        <br />
        <label>Country:</label>
        <select>
          {country.map((p) => (
            <option>{p}</option>
          ))}
        </select>
        <br />
        <br />
        <label>Sex</label>
        <input
          type="radio"
          value="female"
          id="female"
          onClick={handleFemale}
        ></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
