import React from 'react';
import { connect } from 'react-redux';
import { handleChangeFocus } from '../actions';
import ActiveLink from '../component/activeLink';

const ActiveLinkContainer = props => (<ActiveLink {...props} />);

const mapStateToProps = state => ({
  navText: state.nav.navText,
});

const mapDispatchToProps = dispatch => ({
  updateNav: text => dispatch(handleChangeFocus(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveLinkContainer);
