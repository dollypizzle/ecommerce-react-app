import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../store/actions/login';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdbreact';

const Navigation = props => {
  const logout = event => {
    event.preventDefault();
    props.logout();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const { isAuthenticated } = props.auth;

  const userLinks = (
    <MDBNavbarNav right>
      <MDBNavItem>
        <MDBNavLink to="/">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/Products">Products</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/cart">Cart</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/logout" onClick={logout}>
          Logout
        </MDBNavLink>
      </MDBNavItem>
    </MDBNavbarNav>
  );

  const guestLinks = (
    <MDBNavbarNav right>
      <MDBNavItem>
        <MDBNavLink to="/">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/Products">Products</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/cart">Cart</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/login">Login</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/register">Sign Up</MDBNavLink>
      </MDBNavItem>
    </MDBNavbarNav>
  );

  return (
    <MDBNavbar color="black" dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink to="/">
          <strong className="white-text">Dolmart</strong>
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          {isAuthenticated ? userLinks : guestLinks}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);
