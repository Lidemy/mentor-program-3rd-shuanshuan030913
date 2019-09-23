import { combineReducers } from 'redux';
import { CHANGE_NAV } from './activerTypes';

const initial = {
  navText: '/',
};

function navReducer(state = initial, action) {
  switch (action.type) {
    case CHANGE_NAV: {
      return {
        ...state,
        navText: action.value,
      };
    }
    default:
      return state;
  }

}


const reducers = combineReducers({
  nav: navReducer,
});


export default reducers;
