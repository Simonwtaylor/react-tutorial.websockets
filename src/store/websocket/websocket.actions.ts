import { WebsocketTypes as wt } from './websocket.types';

export const wsConnect = (host: any) => ({
  type: wt.WS_CONNECT,
  host,
});

export const wsConnecting = (host: any) => ({
  type: wt.WS_CONNECTING,
  host,
});

export const wsConnected = (host: any) => ({
  type: wt.WS_CONNECTED,
  host,
});

export const wsDisconnect = (host: any) => ({
  type: wt.WS_DISCONNECT,
  host,
});

export const wsDisconnected = (host: any) => ({
  type: wt.WS_DISCONNECTED,
  host,
});
