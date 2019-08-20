import {Reducer} from 'redux';

//  types
import {
  AuthAction,
  AuthState
} from './auth.types';
import {ActionsTypes} from './auth.action.service';

// default init state
const defaultInitState: AuthState = {
  kind: null,
  user: null
};

const setToken = (state: AuthState, token: string) => {
  const copy: AuthState = JSON.parse(JSON.stringify(token));
  return copy;
};


const deleteToken = (state: AuthState) => {
  return null;
};

export function createAuthReducer(): Reducer<any> {
  return function (state: AuthState = defaultInitState,
                   action: AuthAction): any {

    switch (action.type) {
      case ActionsTypes.SET_TOKEN:
        return setToken(state, action.token);

      case ActionsTypes.DELETE_TOKEN:
        return deleteToken(state);

      default:
        return state;
    }
  };
}
