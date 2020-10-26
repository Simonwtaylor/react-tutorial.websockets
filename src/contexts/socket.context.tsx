import * as React from 'react';

export const SocketContext = React.createContext<ISocketManagerState>({
  socket: undefined,
});

export const useWebSocket = () => React.useContext(SocketContext);

interface ISocketManagerState {
  socket?: WebSocket;
}

export class SocketManager extends React.Component<any, ISocketManagerState> {
  state: ISocketManagerState = {
    socket: undefined,
  };

  componentDidMount() {
    const socket = new WebSocket("ws://localhost:8080/ws");;
    this.setState({
      socket,
    });
  }

  componentWillUnmount() {
    try {
      this.state.socket && this.state.socket.close();
    } catch (error) {
      
    }
  }

  render() {
    return (
      <SocketContext.Provider value={{ socket: this.state.socket }}>
        {this.props.children}
      </SocketContext.Provider>
    )
  }
}