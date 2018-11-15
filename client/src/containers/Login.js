import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      resmsg: null
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const validateemail = this.state.email;
    const validatepass = this.state.password;

    let apires = fetch("http://35.178.48.240:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: validateemail,
        pass: validatepass
      })
    })
      // .then(response => console.log(response.json))
      // .then(parsedJSON => console.log(parsedJSON.results))
      .then(Response => Response.json())
      .then(data => {
        if (data.message === "Logged in successfully") {
          alert(data.message);
          this.props.userHasAuthenticated(true);
          console.log("login valid");
          this.props.history.push("/LoginHome");
        } else {
          alert("Invalid username / password");
        }
      })
      .catch(error => {
        alert("Invalid Name / password! Try again");
        console.error(error);
      });

    // alert(validateemail);
    //alert(validatepass);

    // this.props.userHasAuthenticated(true);
    // this.props.setusername(validateemail);
    // this.props.history.push("/LoginHome");
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
