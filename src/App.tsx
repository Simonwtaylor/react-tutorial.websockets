import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useWebSocket } from './contexts/socket.context';

function App() {
  const [appData, onAppData] = React.useState<any[]>([]);
  const { socket } = useWebSocket();

  if (socket) {
    socket.onmessage = (data) => {
      onAppData([...appData, JSON.parse(data.data)]);
    };
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {appData?.map(({body}, i) => <p key={i}>{body}</p>)}
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
