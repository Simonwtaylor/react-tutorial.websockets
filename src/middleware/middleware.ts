import {
  taskInfo,
  wsConnected,
  wsDisconnected,
  WebsocketTypes as wt,
} from '../store';

const socketMiddleware = () => {
  let socket: WebSocket|null = null;

  const onOpen = (store: any) => (event: any) => {
    console.log('websocket open', event.target.url);
    store.dispatch(wsConnected(event.target.url));
  };

  const onClose = (store: any) => (event: any) => {
    store.dispatch(wsDisconnected(event.target.url));
  };

  const onMessage = (store: any) => (event: any) => {
    const payload = JSON.parse(event.data);
    console.log("Getting server message");

    console.log(payload);

    switch(payload.type) {
      case 1:
        store.dispatch(taskInfo(payload.body))
    }
  }

  return (store: any) => (next: any) => (action: any) => {
    switch (action.type) {
      case wt.WS_CONNECT:
        if (socket !== null) {
          socket.close();
        }

        socket = new WebSocket(action.host);

        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case wt.WS_CONNECT:
        if (socket !== null) {
          socket.close();
        }

        socket = null;
        console.log("SOCKET CLOSED");
        break;
      case wt.WS_NEW_MESSAGE:
        console.log('Sending a message', action.msg);
        socket?.send(JSON.stringify({ command: 'NEW_MESSAGE', message: action.msg }));
        break;
      default:
        console.log('The next action is: ', action);
        return next(action);
    }
  }
};

export default socketMiddleware();
