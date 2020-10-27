import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import WebsocketConnection from './hoc/websocket-connection.hoc';
// import { SocketManager } from './contexts/socket.context';

const Root = ({ store }: any) => (
  <React.StrictMode>
    <Provider store={store}>
      <WebsocketConnection
        host={'ws://localhost:8080/ws'}
      >
        <App />
      </WebsocketConnection>
    </Provider>
  </React.StrictMode>
);


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
