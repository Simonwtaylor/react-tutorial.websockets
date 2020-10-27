import { WebsocketTypes as wt } from './websocket.types';

const INITIAL_STATE = {};

export const websocketReducer = (state = { ...INITIAL_STATE }, action: any) => {
  switch(action.type) {
    case wt.WS_CONNECT:
      return { ...state, host: action.host };
    case wt.WS_CONNECTED:
      return { ...state, connected: true };
    default:
      return state;
  }
};
