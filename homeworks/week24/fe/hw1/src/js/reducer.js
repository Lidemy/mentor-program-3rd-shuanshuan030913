import { combineReducers } from 'redux';
import * as activeTypes from './activeTypes';

const initial = {
  navText: '/',
  isLoading: false,
  editDone: false,
  posts: [],
  post: {
    title: '',
    author: '',
    body: '',
  },
};

function navReducer(state = initial, action) {
  switch (action.type) {
    case activeTypes.CHANGE_NAV: {
      return {
        ...state,
        navText: action.value,
      };
    }
    default:
      return state;
  }

}

function apiReducer(state = initial, action) {
  switch (action.type) {
    case activeTypes.IS_LODING: {
      return {
        ...state,
        isLoading: true,
        editDone: false,
      };
    }
    case activeTypes.GET_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        post: action.data,
      };
    }
    case activeTypes.GET_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        posts: action.data,
      };
    }
    case activeTypes.UPDATE_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        editDone: true,
        post: action.data,
      };
    }
    case activeTypes.ADD_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        editDone: true,
        post: action.data,
      };
    }
    case activeTypes.DELETE_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        editDone: true,
        post: {
          title: '',
          author: '',
          body: '',
        },
      };
    }
    default:
      return state;
  }

}


const reducers = combineReducers({
  nav: navReducer,
  api: apiReducer,
});


export default reducers;
