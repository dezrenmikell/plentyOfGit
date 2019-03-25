import React from "react";
import styled from "styled-components";

const StuffWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 7px solid cadetblue;
    margin: 0 auto;
    background: black;
    
    margin-top: 30px;
    width: 325px;
    border-radius: 50px;
    height: 300px;
    
    

   


    input,textarea {
        margin-bottom: 30px;
        font-size: 1.8em;
        background-color: cadetblue;        
        text-align: center;
        margin-top: 10px;
        margin: 0 auto;
        width: 300px;
        border-radius: 50px;
        
    }
    input{
        font-weight: bold;
        font-size: 2em;
        
        height: 50px;
        padding: 5px;
        border: 4px solid silver;
        border-radius: 50px;
        margin-bottom: 30px;
        background-color: cadetblue;        
        text-align: center;
        margin-top: 10px;

 
    }
    textarea{
        display: flex;
        text-align: center;
        vertical-align: middle;
        height: 150px;
        border: 4px solid silver;
        justify-content: center;
        align-items: center;
        padding: 15px;
        width 270px;
    }
    button{
        height: 20px;
        margin: 0 auto;
        marigin-top: 20px;
        width: 70px;
        border-radius: 10px;
        background: red;
        font-weight: bold;

        
    }

`;

function Stuff(props) {
  return (
    <StuffWrapper>
      <input
        type="text"
        name="title"
        onChange={e => props.handleChange(props.stuff, e)}
        onMouseOut={e => props.updateStuff(props.stuff, e)}
        value={props.stuff.title}
      />
      <textarea
        name="description"
        cols="30"
        rows="10"
        onChange={e => props.handleChange(props.stuff, e)}
        onMouseOut={e => props.updateStuff(props.stuff, e)}
        value={props.stuff.description}
      />
      <button onClick={() => props.deleteStuff(props.stuff)}>DELETE</button>
    </StuffWrapper>
  );
}

export default Stuff;
