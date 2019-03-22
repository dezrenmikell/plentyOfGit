import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const CoolNav = styled.div`
    background: cadetblue;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NavLink = styled(Link)`
    background: cadetblue;
    display: block;
`

class Navbar extends Component {
    render() {
        return (
            <div>
               <NavLink to="/">Home</NavLink> 
            <CoolNav>
               <h1>Plenty of Git</h1>
               <h3>HOME TO BOTH NERDS AS HORDERS</h3> 
            </CoolNav>
            </div>
        );
    }
}

export default Navbar;