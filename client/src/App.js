import Routes from "./Routes";
import React, { Component, Fragment } from "react";

import { Link, withRouter } from "react-router-dom";

import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user: null
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  setusername = username => {
    //alert(username);
    this.setState({ user: username });
    //alert(this.state.isAuthenticated);
  };
  findusername = username => {
    // alert("find uame");
    return this.state.user;
  };
  handleLogout = event => {
    this.userHasAuthenticated(false);
    this.props.history.push("/");
  };
  handlechat = event => {
    //alert("handle chat");
    //alert(this.state.user);
    this.props.history.push("/chathome");
  };
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      userHasAuthenticated: this.userHasAuthenticated,
      setusername: this.setusername,
      findusername: this.findusername
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <div>TCS</div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.isAuthenticated ? (
                <Fragment>
                  <NavItem onClick={this.handlechat}>Chat</NavItem>
                  <NavItem onClick={this.handleLogout}>Logout</NavItem>
                </Fragment>
              ) : (
                <Fragment>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
