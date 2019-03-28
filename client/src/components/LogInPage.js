import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const LogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: cadetblue;
  border-radius: 20px;
  text-align: center;
  border: 4px solid black;
`;
const StyledLink = styled(Link)`
  margin: 0 auto;
  background: silver;
  border: 2px solid black;
  border-radius: 8px;
  width: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const CreateButton = styled.button`
  background: silver;
  border: 2px solid black;
  border-radius: 8px;
  width: 100px;
  text-align: center;
`;

class LogInPage extends Component {
  state = {
    users: [],
    user: {
      userName: "",
      password: ""
    },
    redirectToHome: false,
    createdUser: {}
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios.get("/api/users").then(res => {
      this.setState({ users: res.data });
    });
  };

  createUser = () => {
    axios.post("/api/users", { user: this.state.user }).then(res => {
      this.setState({ redirectToHome: true, createdUser: res.data });
    });
  };

  handleChange = e => {
    const newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.createUser();
  };
  deleteUser = () => {
    const userId = this.props.match.params.userId;
    axios.delete(`api/user/${userId}`);
    this.props.history.goBack();
  };

  render() {
    if (this.state.redirectToHome === true) {
      return <Redirect to={`/user/${this.state.createdUser._id}`} />;
    }

    return (
      <LogWrapper>
        <h1>Log in Page</h1>
        <StyledLink to="/">Go Back Home</StyledLink>

        <h2>Select a user to log in</h2>
        {this.state.users.map(user => {
          return (
            <div>
              <StyledLink to={`/user/${user._id}`} key={user._id}>
                {user.userName}
              </StyledLink>
            </div>
          );
        })}

        <h2>Sign Up</h2>
        <form onSubmit={this.handleSignUp}>
          <div>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              onChange={this.handleChange}
              value={this.state.user.userName}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.user.password}
            />
          </div>
          <CreateButton>Create User</CreateButton>
        </form>
      </LogWrapper>
    );
  }
}

export default LogInPage;
