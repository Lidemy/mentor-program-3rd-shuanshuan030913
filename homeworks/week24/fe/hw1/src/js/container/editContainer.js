import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleChangeFocus, handleGetPost, handleUpdatePost, handleAddPost } from '../actions';
import Edit from '../component/edit';

const EditContainer = props => (<Edit {...props} />);

const mapStateToProps = state => ({
  navText: state.nav.navText,
  editDone: state.api.editDone,
  isLoading: state.api.isLoading,
  post: state.api.post,
  posts: state.api.posts,
});

const mapDispatchToProps = dispatch => ({
  updateNav: text => dispatch(handleChangeFocus(text)),
  getPost: (id) => {
    dispatch(handleGetPost(id));
  },
  uptPost: (id, newData) => {
    dispatch(handleUpdatePost(id, newData));
  },
  addPost: (newData) => {
    dispatch(handleAddPost(newData));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditContainer));
