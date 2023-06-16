import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Profile from './test';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <Button type='primary'>测试按钮</Button>
        </p>
        <Profile></Profile>

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
