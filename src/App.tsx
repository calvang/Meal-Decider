import React, { useState } from 'react';
import logo from './resources/logo512.png';
import './App.css';



function ExistingMeals() {
  return (
    <>
      
    </>
  );
}

function Main() {
  return (
    <>
      
    </>
  );
}

function App() {
  let placeholder: Array<string> = []
  const [isOpen, setOpen] = useState(false);
  const [mealList, addMeal] = useState(placeholder);

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
        <Main />
      </body>
    </div>
  );
}

export default App;
