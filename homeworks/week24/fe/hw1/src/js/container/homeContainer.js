import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleChangeFocus, handleGetPosts } from '../actions';
import Home from '../component/home';

const HomeContainer = props => (<Home {...props} />);

const mapStateToProps = state => ({
  navText: state.nav.navText,
  isLoading: state.api.isLoading,
  posts: state.api.posts,
});

const mapDispatchToProps = dispatch => ({
  updateNav: text => dispatch(handleChangeFocus(text)),
  getPostsList: () => {
    dispatch(handleGetPosts());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
