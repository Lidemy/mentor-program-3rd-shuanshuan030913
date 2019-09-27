import React from 'react';
import { connect } from 'react-redux';
import { handleChangeFocus, handleGetPost, handleDeletePost } from '../actions';
import Post from '../component/post';

const PostContainer = props => (<Post {...props} />);

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
  deletePost: (id) => {
    dispatch(handleDeletePost(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
