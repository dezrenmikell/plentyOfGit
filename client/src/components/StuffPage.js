import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Stuff from "./Stuff";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  margin: 0 auto;
  background: orange;
  border: 2px solid black;
  border-radius: 10px;
`;
const PageWrapper = styled.div`
        background: silver;
        border: 4px solid black;

        border-radius: 10px;
    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: cadetblue;
        border: 4px solid black
        border-radius: 30px;

    }
    
`;
const NewButton = styled.button`
    background orange;
    border-radius: 30px;
    font-weight: bold;
    text-align: center;
    border: 4px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
const DeleteButton = styled.button`
height: 20px;
margin: 0 auto;
marigin-top: 20px;
width: 70px;
border-radius: 10px;
background: red;
font-weight: bold;




`;
class StuffPage extends Component {
  state = {
    user: {
      userName: "",
      userId:"",
    },
    stuffs: []
  };
  componentDidMount = () => {
    if (this.props.match.params) {
      axios.get(`/api/users/${this.props.match.params.userId}`).then(res => {
        this.setState({
          stuffs: res.data.stuffs,
          user: {
            _id: res.data._id,
            userName: res.data.userName,
            userId: res.data.userId
          }
        });
      });
    }
  };

  createStuff = () => {
    const userId = this.props.match.params.userId;
    axios.post(`/api/users/${userId}/stuffs`).then(res => {
      const newStuffs = [...this.state.stuffs];
      newStuffs.unshift(res.data);
      this.setState({ stuffs: newStuffs });
    });
  };

  deleteStuff = stuff => {
    const userId = this.props.match.params.userId;
    const stuffId = stuff._id;
    axios.delete(`/api/users/${userId}/stuffs/${stuffId}`).then(res => {
      this.setState({ stuffs: res.data });
    });
  };
  deleteUser=()=>{
    const userId=this.props.match.params.userId
    axios.delete(`/api/users/${userId}`)
    .then(()=>{
      this.props.history.goBack()
    })
    
  }

  handleChange = (stuff, event) => {
    console.log("HANDLE CHANGE");
    const newStuffs = [...this.state.stuffs];

    const stuffs = newStuffs.map(savedStuff => {
      if (savedStuff._id === stuff._id) {
        savedStuff[event.target.name] = event.target.value;
      }
      return savedStuff;
    });
    this.setState({ stuffs: stuffs });
  };

  updateStuff = (stuff, e) => {
    const userId = this.props.match.params.userId;
    axios
      .patch(`/api/users/${userId}/stuffs/${stuff._id}`, { stuff })
      .then(res => {
        this.setState({ stuffs: res.data.stuffs });
      });
  };

  render() {
    return (
      <PageWrapper>
        <StyledLink to="/login">Change User</StyledLink>
        <DeleteButton onClick={()=>this.deleteUser(this.state.user.userId)}>deleteUser</DeleteButton>
        <h2>Look At All Our Stuff!</h2>
        <NewButton onClick={this.createStuff}> +NEW STUFF</NewButton>

        <div>
          {this.state.stuffs.map(stuff => {
            return (
              <PageWrapper>
                <Stuff
                  key={stuff._id}
                  stuff={stuff}
                  deleteStuff={this.deleteStuff}
                  handleChange={this.handleChange}
                  updateStuff={this.updateStuff}
                />
              </PageWrapper>
            );
          })}
        </div>
      </PageWrapper>
    );
  }
}

export default StuffPage;
