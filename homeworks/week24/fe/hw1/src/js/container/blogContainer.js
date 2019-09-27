import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleGetPosts } from '../actions';
import Blog from '../component/blog';

const BlogContainer = props => (<Blog {...props} />);

const mapStateToProps = state => ({
  isLoading: state.api.isLoading,
  posts: state.api.posts,
});

const mapDispatchToProps = dispatch => ({
  getPostsList: () => {
    dispatch(handleGetPosts());
  },
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogContainer));
