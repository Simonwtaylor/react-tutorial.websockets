import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { selectTask } from './store';

function App() {

  const task = useSelector(selectTask);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {task && task}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
