
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from 'styled-components'
import { Container, Navbar, Nav } from "react-bootstrap";
import { logout } from "../components/login/LoginActions";
import backgroundVideo from './css/earth_defense_force___global_defense_force_logo_by_kaijulover1954_dbfcdql-fullview.jpg'


const HomeStyle = styled.nav`
img{
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
}
h1{
    text-align: center;
    font-size: 50px;
    position: relative;
    bottom: 130px;
    color: black;
  }
.logout{
  color: black;
  font-size: 1.5vw;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  padding: 12px 16px;
  position: fixed;
  left: 0%;
  top: 8%;
}
.logout:hover
{
    color: #f90;
    text-decoration: underline;         
}
.kaijus{
  color: black;
  font-size: 1.5vw;
  font-size: 50px;
  text-decoration: red underline;
  position: fixed;
  left: 45%;
  top: 82%;
}
.kaijus:hover
{
    color: #f90;
    text-decoration: underline;         
}
.about{
  color: black;
  font-size: 1.5vw;
  font-size: 30px;
  text-decoration: none;
  position: fixed;
  left: 93%;
  top: 10%;
}
.about:hover
{
    color: #f90;
    text-decoration: underline;         
}
.signup{
  color: black;
  font-size: 1.5vw;
  font-size: 30px;
  text-decoration: none;
  position: fixed;
  left: 93%;
  top: 5%;
}
.signup:hover
{
    color: #f90;
    text-decoration: underline;         
}
.login{
  color: black;
  font-size: 1.5vw;
  text-decoration: none;
  font-size: 30px;
  position: fixed;
  left: 88%;
  top: 5%;
}
.login:hover
{
    color: #f90;
    text-decoration: underline;         
}
.user{
  position: fixed;
  left: 10;
  top: 5.5%;
  color: black
}
h2 {
  display: inline-block;
}

p {
    text-align: center;
    font-size: 50px;
    position: relative;
    bottom: 50px;
    color: red;
    font-weight: bold;
}

`


class Home extends Component {
  onLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <HomeStyle>
      <div>
        <Navbar bg="light">
          <Navbar.Collapse className="justify-content-end">
          <img src={backgroundVideo} alt='my-gif'></img>
            <h2><Navbar.Text className='user'>
              User: <b className="user">{user.username}</b>
            </Navbar.Text></h2>
            <h2><Nav.Link className='logout'onClick={this.onLogout}>Logout</Nav.Link></h2>
          </Navbar.Collapse>
        </Navbar>
        <Container>
        <h2><Navbar.Brand className='signup' href="/signup">Sign Up</Navbar.Brand></h2>
        <h2><Navbar.Brand className='about' href="/about">About</Navbar.Brand></h2>
        <h2><Navbar.Brand className='login' href="/login">Login</Navbar.Brand></h2>
          <h1>Kaiju Database</h1>
          <h2><Navbar.Brand className='kaijus' href="/kaijus">Kaiju List</Navbar.Brand></h2>
        </Container>
      </div>
      </HomeStyle>
    );
  }
}

Home.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logout
})(withRouter(Home));