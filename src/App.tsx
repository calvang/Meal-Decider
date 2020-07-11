import React, { useState } from 'react';
import logo from './resources/logo512.png';
import './App.css';

function App() {
  let placeholder: Array<string> = []
  const [isOpen, setOpen] = useState(false);
  const [mealList, addMeal] = useState(placeholder);
  const [inString, updateInput] = useState("");

  const meals = ["Breakfast", "Lunch", "Dinner"];
  var today = new Date();
  var meal = [{
    name: meals[0],
    created: today.getTime()
  }];

  const toggleOpen = () => setOpen(!isOpen);
  const addNewMeal = () => addMeal(mealList.concat(meals[0]));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Meal Decider</h1>
        <span role="img" aria-label="Decorative Emojis">
          ☕🥪🍝🍍
        </span>
      </header>
      <body>
        <button onClick={toggleOpen}>
          <h3>Add a new meal</h3>
        </button>
        {
          isOpen ?
            <form style={{borderRadius: '5px'}}>
              <button 
                type="submit" 
                style={{padding:'2px'}}
                className="w3-button" 
                onClick={addNewMeal}
              ><i className="fa fa-plus-circle fa-fw w3-xlarge"></i></button>
              <input type="text" className='search'
                style={{marginTop: '10px', left: 0,borderRadius: '5px', outline:'none'}}
                placeholder="Enter meal"
                value={inString}
                onChange={e => updateInput(e.target.value)}
              />
            </form>
          :
            <table>
              <tbody>
                {mealList.map(item => {
                  return <tr>
                    <td>Meal Name</td>
                    <td>{item}</td>
                  </tr>;
                })}
              </tbody>
            </table>
        }
      </body>
    </div>
  );
}

export default App;
