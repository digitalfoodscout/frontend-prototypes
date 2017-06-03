import React from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom';

const ProtectedPage = (props) => {
  const {loggedIn} = props;
  return loggedIn === false ? <Redirect to="login"/> : null;
};
ProtectedPage.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
export default ProtectedPage;
