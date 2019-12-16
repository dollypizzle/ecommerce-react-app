import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Register from '../../containers/Register/Register';
import { userRegisterRequest } from '../../store/actions/register';

const RegisterPage = props => {
  const { userRegisterRequest } = props;
  return (
    <div>
      <Register userRegisterRequest={userRegisterRequest} />
    </div>
  );
};

RegisterPage.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired,
};

export default connect(
  null,
  { userRegisterRequest }
)(RegisterPage);
