import * as activeTypes from './activeTypes';
import * as webAPI from './WebAPI';

const changeFocus = nav => ({
  type: activeTypes.CHANGE_NAV,
  value: nav,
});

const isLoading = () => ({
  type: activeTypes.IS_LODING,
});

const getPostSuccess = data => ({
  type: activeTypes.GET_POST_SUCCESS,
  data,
});

const getPostsSuccess = data => ({
  type: activeTypes.GET_POSTS_SUCCESS,
  data,
});


const uptPostSuccess = data => ({
  type: activeTypes.UPDATE_POST_SUCCESS,
  data,
});

const addPostSuccess = data => ({
  type: activeTypes.ADD_POST_SUCCESS,
  data,
});

const DeletePostSuccess = () => ({
  type: activeTypes.DELETE_POST_SUCCESS,
});


export const handleChangeFocus = text => function (dispatch) {
  dispatch(changeFocus(text));
};

export const handleGetPosts = () => function (dispatch) {
  dispatch(isLoading());
  webAPI.getPostsData()
    .then(res => res.json())
    .then(json => dispatch(getPostsSuccess(json)));
};

export const handleGetPost = id => function (dispatch) {
  dispatch(isLoading());
  webAPI.getPostData(id)
    .then(res => res.json())
    .then(json => dispatch(getPostSuccess(json)));
};

export const handleUpdatePost = (id, newData) => function (dispatch) {
  dispatch(isLoading());
  webAPI.updatePost(id, newData)
    .then(res => res.json())
    .then((json) => {
      alert('Submit Success!');
      dispatch(uptPostSuccess(json));
    });
};

export const handleAddPost = newData => function (dispatch) {
  dispatch(isLoading());
  webAPI.addPost(newData)
    .then(res => res.json())
    .then((json) => {
      alert('Submit Success!');
      dispatch(addPostSuccess(json));
    });
};

export const handleDeletePost = id => function (dispatch) {
  dispatch(isLoading());
  webAPI.deletePost(id)
    .then(() => {
      alert('Delete Success!');
      dispatch(DeletePostSuccess());
    });
};
