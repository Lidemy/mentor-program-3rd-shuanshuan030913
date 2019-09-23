import React from 'react';
import { connect } from 'react-redux';
import { changeFocus } from '../actions';
import ActiveLink from '../component/activeLink';

const ActiveLinkContainer = props => (<ActiveLink {...props} />);

const mapStateToProps = state => ({
  navText: state.nav.navText,
});

const mapDispatchToProps = dispatch => ({
  updateNav: text => dispatch(changeFocus(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveLinkContainer);
