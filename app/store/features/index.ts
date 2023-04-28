import {combineReducers} from 'redux';
import authReducer from './auth';
import contactReducer from './contact';

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer
});

export default rootReducer;
