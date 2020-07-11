import React, { useState } from 'react';
import logo from './resources/logo512.png';
import './App.css';

function App() {
  let placeholder: Array<string> = ["Hi"]
  const [isOpen, setOpen] = useState(false);
  const [mealList, addMeal] = useState(placeholder);
  const [inString, updateInput] = useState("");

  const meals = ["Breakfast", "Lunch", "Dinner"];
  // var today = new Date();
  // var meal = [{
  //   name: meals[0],
  //   created: today.getTime()
  // }];

  const toggleOpen = () => setOpen(!isOpen);
  const addNewMeal = () => addMeal(mealList.concat(meals[0]));

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <span> Meal Decider</span>
        </div>
        <span role="img" aria-label="Decorative Emojis">
            ☕🥪🍝🍍
        </span>
      </header>
      <body className="App-body">
        {
          isOpen ?
            <form style={{borderRadius: '5px'}}>
              <input type="text"
                className="App-input"
                style={{borderRadius: '5px', outline:'none'}}
                placeholder="Enter meal"
                value={inString}
                onChange={e => updateInput(e.target.value)}
              />
              <button 
                type="submit"
                className="w3-button"
                onClick={addNewMeal}
              ><i className="fa fa-plus-circle fa-fw w3-xlarge"></i></button>
            </form>
            :
            <>
              <button
                className="App-button w3-button w3-dark-gray"
                onClick={toggleOpen}>
                Add a new meal
              </button>
              <table className="App-table">
                <tbody>
                  {mealList.map(item => {
                    return <tr>
                      <td className="App-table-el">Meal Name</td>
                      <td className="App-table-el">{item}</td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </>
        }
      </body>
    </div>
  );
}

export default App;
