import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };


  //add item
  const additem = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  };

  //delete item
  const deleteItem = (id) => {
  
    const updateitems = item.filter((elem, ind) => {
      return ind !== id;
    });
    setItem(updateitems);
  };

  //clear all
  const removeAll=()=>{
    setItem([])
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();

    setInputData("");
  };

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h3>What is the plane today ?</h3>
              <input
                type="text"
                placeholder="Add Items..."
                value={inputData}
                name="text"
                onChange={handleChange}
              />
              <button onClick={additem}>Add</button>
              <br></br>

              <div>
                {item.map((elem, ind) => {
                  return (
                    <div key={ind}>
                      {elem}
                      <br />

                      <button onClick={() => deleteItem(ind)}>Delete</button>
                    </div>
                  );
                })}
              </div>

              <br />
              <br />
              <br />


              <button onClick={removeAll}>Clear All</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
