import {combineReducers} from 'redux';

// redux form
import {
  composeReducers,
  defaultFormReducer
} from '@angular-redux/form';

// reducers
import {createAuthReducer} from './auth';

export const rootReducer = composeReducers(
  defaultFormReducer(),

  combineReducers({
    auth: createAuthReducer()
  })
);
