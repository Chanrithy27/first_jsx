import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Dojo! </h1>
        <p>Things I need to do: </p>
        <ul class="my-todo-list">
          <li>* Learn React</li>
          <li>* Climb Mt. Everest</li>
          <li>* Run a marathon</li>
          <li>* Feed the dogs</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
